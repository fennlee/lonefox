import type { AstroIntegration } from 'astro';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const themeSrc = fileURLToPath(new URL('./', import.meta.url));

/** Theme `src/` as a path relative to the site root. Pass to `srcDir`. */
export function lonefoxSrc(root: string = process.cwd()): string {
  const rel = path.relative(root, themeSrc);
  return rel || './src';
}

export default function lonefox(): AstroIntegration {
  return {
    name: 'lonefox',
    hooks: {
      'astro:config:setup': ({ updateConfig, config }) => {
        const root = fileURLToPath(config.root);
        const configFile = path.join(root, 'lonefox.config.ts');
        updateConfig({
          vite: {
            plugins: [
              {
                name: 'lonefox-config',
                enforce: 'pre',
                resolveId(id) {
                  if (id === 'lonefox/config') return configFile;
                },
              },
            ],
          },
        });
      },
    },
  };
}
