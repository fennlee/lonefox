import type { AstroIntegration } from 'astro';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Theme `src/` directory — set as `srcDir` when using lonefox as a package. */
export function lonefoxSrc(): URL {
  return new URL('./', import.meta.url);
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
