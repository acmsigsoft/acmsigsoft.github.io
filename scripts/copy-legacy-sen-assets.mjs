#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(process.env.PUBLIC_DIR || process.argv[2] || "public");
const sourceDir = path.resolve(process.env.SEN_STATIC_DIR || process.argv[3] || "static/sen");
const legacyDir = path.join(publicRoot, "SEN");
const openTocSourceDir = path.resolve(process.env.OPENTOC_SOURCE_DIR || "content/opentoc");
const openTocPublicDir = path.join(publicRoot, "opentoc");

if (!fs.existsSync(publicRoot) || !fs.statSync(publicRoot).isDirectory()) {
  console.error(`Missing Hugo public directory: ${publicRoot}`);
  process.exit(1);
}

if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
  console.error(`Missing SEN static assets directory: ${sourceDir}`);
  process.exit(1);
}

if (!fs.existsSync(openTocSourceDir) || !fs.statSync(openTocSourceDir).isDirectory()) {
  console.error(`Missing OpenTOC source directory: ${openTocSourceDir}`);
  process.exit(1);
}

fs.mkdirSync(legacyDir, { recursive: true });
fs.cpSync(sourceDir, legacyDir, { recursive: true });

fs.mkdirSync(openTocPublicDir, { recursive: true });
let openTocFileCount = 0;
for (const entry of fs.readdirSync(openTocSourceDir, { withFileTypes: true })) {
  if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== ".html") continue;
  fs.copyFileSync(path.join(openTocSourceDir, entry.name), path.join(openTocPublicDir, entry.name));
  openTocFileCount += 1;
}

console.log(`Copied SEN assets to ${path.relative(process.cwd(), legacyDir) || legacyDir}`);
console.log(`Copied ${openTocFileCount} OpenTOC files to ${path.relative(process.cwd(), openTocPublicDir) || openTocPublicDir}`);
