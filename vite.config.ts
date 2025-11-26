import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as fs from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'inject-menu-bar',
          apply: 'build',
          writeBundle() {
            const menuPath = './menu-bar.html';
            if (!fs.existsSync(menuPath)) {
              this.warn('menu-bar.html not found; skipping injection');
              return;
            }
            const menuBarContent = fs.readFileSync(menuPath, 'utf-8');

            const skipDirs = new Set(['.git', 'node_modules', 'dist']);

            function walk(dir) {
              const entries = fs.readdirSync(dir, { withFileTypes: true });
              for (const entry of entries) {
                const name = entry.name;
                const full = path.join(dir, name);
                if (entry.isDirectory()) {
                  if (skipDirs.has(name)) continue;
                  walk(full);
                } else if (entry.isFile() && name.endsWith('.html')) {
                  if (name === 'index.html' || name === 'menu-bar.html') continue;
                  let content = fs.readFileSync(full, 'utf-8');
                  if (!content.includes('<!-- Menu Bar - Include this in all subpages -->')) {
                    content = content.replace(/(<body[^>]*>)/i, `$1\n${menuBarContent}`);
                  }
                  // Ensure target directory exists in dist
                  const relative = path.relative(process.cwd(), full);
                  const dest = path.join(process.cwd(), 'dist', relative);
                  const destDir = path.dirname(dest);
                  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
                  fs.writeFileSync(dest, content, 'utf-8');
                }
              }
            }

            walk(process.cwd());
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
