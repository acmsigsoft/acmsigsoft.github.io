#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(process.env.PUBLIC_DIR || process.argv[2] || "public");
const sourceDir = path.resolve(process.env.SEN_STATIC_DIR || process.argv[3] || "static/sen");
const legacyDir = path.join(publicRoot, "SEN");

if (!fs.existsSync(publicRoot) || !fs.statSync(publicRoot).isDirectory()) {
  console.error(`Missing Hugo public directory: ${publicRoot}`);
  process.exit(1);
}

if (!fs.existsSync(sourceDir) || !fs.statSync(sourceDir).isDirectory()) {
  console.error(`Missing SEN static assets directory: ${sourceDir}`);
  process.exit(1);
}

fs.mkdirSync(legacyDir, { recursive: true });
fs.cpSync(sourceDir, legacyDir, { recursive: true });

console.log(`Copied SEN assets to ${path.relative(process.cwd(), legacyDir) || legacyDir}`);
