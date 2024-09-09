import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs/promises';
import { globIterate } from 'glob';

await fs.rm('dist', { recursive: true, force: true });

// build decks
for await (const deck of globIterate('*.md')) {
  if (deck === 'README.md') {
    continue; // TODO: render landing page
  }

  const name = path.basename(deck, '.md');
  execSync(`yarn slidev build ${deck} -o dist/${name} --base /slides/${name}`, {
    stdio: 'inherit',
  });
}

// merge _redirects
let allRedirects = '';
for await (const redirects of globIterate('dist/*/_redirects')) {
  allRedirects += await fs.readFile(redirects, 'utf8');
  await fs.rm(redirects);
}
await fs.writeFile('dist/_redirects', allRedirects);
