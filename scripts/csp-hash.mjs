import { createHash } from 'crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

function walkHtml(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walkHtml(full));
    else if (extname(entry.name) === '.html') results.push(full);
  }
  return results;
}

function extractInlineScripts(html) {
  const inline = [];
  const re = /<script([^>]*)>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const body = m[2];
    if (!attrs.includes('src=') && body.trim()) {
      inline.push(body);
    }
  }
  return inline;
}

function sha256b64(text) {
  return createHash('sha256').update(text, 'utf8').digest('base64');
}

const outDir = join(process.cwd(), 'out');
const headersPath = join(outDir, '_headers');

const hashes = new Set();
for (const file of walkHtml(outDir)) {
  const html = readFileSync(file, 'utf8');
  for (const script of extractInlineScripts(html)) {
    hashes.add(`'sha256-${sha256b64(script)}'`);
  }
}

const hashList = [...hashes].join(' ');
let headers = readFileSync(headersPath, 'utf8');

headers = headers.replace(
  /(script-src\s+(?:'[^']+'\s+)*)'unsafe-inline'/,
  `$1${hashList}`
);

writeFileSync(headersPath, headers);
console.log(`CSP: replaced unsafe-inline with ${hashes.size} inline script hashes`);
