#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(process.env.PUBLIC_DIR || "public");
const siteBase = new URL(process.env.SITE_BASE_URL || "https://www2.sigsoft.org/");
const siteBasePath = normalizePath(siteBase.pathname);
const strictBasePath = process.env.STRICT_BASE_PATH === "true";
const ignoredProtocols = new Set(["mailto:", "tel:", "javascript:", "data:", "blob:"]);
const internalHosts = new Set([
  siteBase.host,
  "www2.sigsoft.org",
  "127.0.0.1:1313",
  "localhost:1313",
]);

if (!fs.existsSync(publicRoot)) {
  console.error(`PUBLIC_DIR does not exist: ${publicRoot}`);
  process.exit(1);
}

const htmlFiles = walk(publicRoot).filter((file) => file.endsWith(".html"));
const failures = [];
let checkedLinks = 0;

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  const pageUrl = pageUrlFor(file);

  for (const link of extractLinks(source)) {
    const parsed = resolveInternalUrl(pageUrl, link.raw);
    if (!parsed) continue;

    checkedLinks += 1;

    const baseFailure = checkBasePath(parsed);
    if (baseFailure) {
      failures.push(`${rel(file)}: ${link.attr}=${JSON.stringify(link.raw)} escapes base path ${siteBasePath}`);
      continue;
    }

    const target = resolvePublicPath(parsed.pathname);
    if (!fs.existsSync(target)) {
      failures.push(`${rel(file)}: ${link.attr}=${JSON.stringify(link.raw)} -> missing ${slash(path.relative(publicRoot, target))}`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Checked ${htmlFiles.length} HTML file(s) and ${checkedLinks} internal URL(s).`);
  console.error(`Found ${failures.length} broken internal URL(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML file(s) and ${checkedLinks} internal URL(s); no broken internal URLs found.`);

function extractLinks(source) {
  const links = [];
  const attrPattern = /\b(href|src|action)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  let match;

  while ((match = attrPattern.exec(source)) !== null) {
    links.push({ attr: match[1], raw: decodeHtml(match[2] ?? match[3] ?? match[4] ?? "") });
  }

  const srcsetPattern = /\bsrcset=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
  while ((match = srcsetPattern.exec(source)) !== null) {
    for (const candidate of decodeHtml(match[1] ?? match[2] ?? match[3] ?? "").split(",")) {
      const raw = candidate.trim().split(/\s+/)[0];
      if (raw) links.push({ attr: "srcset", raw });
    }
  }

  return links;
}

function resolveInternalUrl(pageUrl, rawLink) {
  const link = rawLink.trim();
  if (!link || link.startsWith("#")) return null;
  if (link.includes("${") || link.includes("{{")) return null;

  let resolved = link;
  if (resolved.startsWith("//")) resolved = `${siteBase.protocol}${resolved}`;

  let url;
  try {
    url = new URL(resolved, pageUrl);
  } catch {
    return null;
  }

  if (ignoredProtocols.has(url.protocol)) return null;
  if (!["http:", "https:"].includes(url.protocol)) return null;
  if (!internalHosts.has(url.host)) return null;

  return url;
}

function checkBasePath(url) {
  if (!strictBasePath) return false;
  if (siteBasePath === "/") return false;
  const normalized = normalizePath(url.pathname);
  return normalized !== siteBasePath && !normalized.startsWith(`${siteBasePath}/`);
}

function resolvePublicPath(urlPath) {
  const stripped = stripSiteBasePath(urlPath).split("#")[0].split("?")[0];
  const decoded = safeDecode(stripped).replace(/^\/+/, "");
  const candidate = path.resolve(publicRoot, decoded);

  if (candidate !== publicRoot && !candidate.startsWith(`${publicRoot}${path.sep}`)) {
    return path.join(publicRoot, "__invalid_path__");
  }

  if (!decoded) return path.join(publicRoot, "index.html");
  if (stripped.endsWith("/")) return path.join(candidate, "index.html");
  if (fs.existsSync(candidate)) return candidate;
  if (path.extname(candidate)) return candidate;

  const asDirectoryIndex = path.join(candidate, "index.html");
  if (fs.existsSync(asDirectoryIndex)) return asDirectoryIndex;
  return `${candidate}.html`;
}

function pageUrlFor(file) {
  const relative = slash(path.relative(publicRoot, file));
  const base = siteBase.href.endsWith("/") ? siteBase.href : `${siteBase.href}/`;

  if (relative === "index.html") return new URL(base);
  if (relative.endsWith("/index.html")) {
    return new URL(relative.slice(0, -"index.html".length), base);
  }
  return new URL(relative, base);
}

function stripSiteBasePath(urlPath) {
  const normalized = normalizePath(urlPath);
  if (siteBasePath !== "/" && normalized.startsWith(`${siteBasePath}/`)) {
    return normalized.slice(siteBasePath.length);
  }
  if (siteBasePath !== "/" && normalized === siteBasePath) return "/";
  return normalized;
}

function normalizePath(value) {
  const normalized = value.startsWith("/") ? value : `/${value}`;
  return normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
}

function walk(root) {
  const result = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) result.push(...walk(fullPath));
    else result.push(fullPath);
  }
  return result;
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

function safeDecode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function rel(file) {
  return slash(path.relative(publicRoot, file));
}

function slash(value) {
  return value.split(path.sep).join("/");
}
