#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const publicRoot = path.resolve(process.env.PUBLIC_DIR || "public");
const siteBase = new URL(process.env.SITE_BASE_URL || "https://www2.sigsoft.org/");
const siteBasePath = normalizePath(siteBase.pathname);
const ignoredProtocols = new Set(["mailto:", "tel:", "javascript:", "data:", "blob:"]);

const changedFiles = process.argv.slice(2).filter((file) => fs.existsSync(file));
const filesToCheck = changedFiles.length > 0 ? changedFiles : gitChangedFiles();
const failures = [];

for (const file of filesToCheck) {
  if (!/\.(md|markdown|html|toml|yaml|yml)$/i.test(file)) continue;

  const source = fs.readFileSync(file, "utf8");
  for (const link of extractLinks(source)) {
    checkLink(file, link);
  }
}

if (failures.length > 0) {
  console.error(`Found ${failures.length} broken link(s) in changed files:`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked links in ${filesToCheck.length} changed file(s); no new broken internal links found.`);

function checkLink(sourceFile, rawLink) {
  const link = decodeHtml(rawLink.trim());
  if (!link || link.startsWith("#") || link.startsWith("//")) return;

  if (link.includes("{{<") || link.includes("{{%")) return;

  const refTarget = parseHugoRef(link);
  if (refTarget) {
    checkContentPath(sourceFile, link, refTarget);
    return;
  }

  if (/\.md$/i.test(link)) {
    checkContentPath(sourceFile, link, link);
    return;
  }

  const internalPath = toInternalPath(link);
  if (!internalPath) return;

  const target = resolvePublicPath(internalPath);
  if (!fs.existsSync(target)) {
    failures.push(`${sourceFile}: broken internal link ${link} -> ${slash(path.relative(publicRoot, target))}`);
  }
}

function checkContentPath(sourceFile, link, target) {
  const contentPath = target.startsWith("/")
    ? path.resolve("content", target.replace(/^\/+/, ""))
    : path.resolve(path.dirname(sourceFile), target);

  if (!fs.existsSync(contentPath)) {
    failures.push(`${sourceFile}: broken Hugo/content ref ${link} -> ${slash(path.relative(process.cwd(), contentPath))}`);
  }
}

function extractLinks(source) {
  const links = new Set();
  const patterns = [
    /\[[^\]]*]\(([^)\s]+)(?:\s+["'][^"']*["'])?\)/g,
    /\b(?:href|src|action)=["']([^"']+)["']/gi,
    /^\s*url\s*=\s*["']([^"']+)["']/gim,
    /\{\{<\s*ref\s+["']([^"']+)["']\s*>}}/g,
    /\{\{%\s*ref\s+["']([^"']+)["']\s*%}}/g,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(source)) !== null) {
      links.add(match[1]);
    }
  }

  return links;
}

function parseHugoRef(link) {
  const match = link.match(/^\{\{[<%]\s*ref\s+["']([^"']+)["']\s*[>%]}}$/);
  return match ? match[1] : null;
}

function toInternalPath(link) {
  let value = link;

  try {
    const url = new URL(link);
    if (ignoredProtocols.has(url.protocol)) return null;
    if (url.origin !== siteBase.origin) return null;
    value = stripSiteBasePath(url.pathname);
  } catch {
    if (/^[a-z][a-z0-9+.-]*:/i.test(link)) return null;
    if (!link.startsWith("/")) return null;
    value = link;
  }

  value = value.split("#")[0].split("?")[0];
  return value || "/";
}

function resolvePublicPath(urlPath) {
  const decoded = safeDecode(urlPath).replace(/^\/+/, "");
  const candidate = path.join(publicRoot, decoded);

  if (path.extname(candidate)) return candidate;
  if (urlPath.endsWith("/")) return path.join(candidate, "index.html");

  const asDirectoryIndex = path.join(candidate, "index.html");
  if (fs.existsSync(asDirectoryIndex)) return asDirectoryIndex;
  return `${candidate}.html`;
}

function gitChangedFiles() {
  const baseRef = process.env.LINK_CHECK_BASE_REF;
  const args = baseRef ? ["diff", "--name-only", `${baseRef}...HEAD`] : ["diff", "--name-only", "HEAD^", "HEAD"];

  try {
    const files = execFileSync("git", args, { encoding: "utf8" })
      .split(/\r?\n/)
      .filter(Boolean);

    if (files.length === 0) {
      console.error(`No changed files found from: git ${args.join(" ")}`);
      console.error("Pass files explicitly or ensure the checkout has enough git history.");
      process.exit(1);
    }

    return files;
  } catch {
    console.error(`Unable to determine changed files from: git ${args.join(" ")}`);
    console.error("Pass files explicitly or ensure the checkout has enough git history.");
    process.exit(1);
  }
}

function stripSiteBasePath(urlPath) {
  const normalized = normalizePath(urlPath);
  if (siteBasePath !== "/" && normalized.startsWith(siteBasePath + "/")) {
    return normalized.slice(siteBasePath.length);
  }
  return normalized;
}

function normalizePath(value) {
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
}

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#34;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function slash(value) {
  return value.split(path.sep).join("/");
}
