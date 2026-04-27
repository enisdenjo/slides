import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs/promises';
import { globIterate } from 'glob';

await fs.rm('dist', { recursive: true, force: true });

for await (const deck of globIterate('slides/*.md')) {
  const name = path.basename(deck, '.md');
  execSync(
    `bun slidev build ${deck} -o ../dist/${name} --base /slides/${name}`,
    { stdio: 'inherit' },
  );
}
