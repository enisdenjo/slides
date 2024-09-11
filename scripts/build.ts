import { execSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs/promises';
import { globIterate } from 'glob';

await fs.rm('dist', { recursive: true, force: true });

for await (const deck of globIterate('slides/*.md')) {
  const name = path.basename(deck, '.md');
  execSync(
    `yarn slidev build ${deck} -o ../dist/${name} --base /slides/${name}`,
    { stdio: 'inherit' },
  );
}
