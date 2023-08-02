import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.mjs'],
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: '11927'
    },
    plugins: [
      {
        enforce: 'pre',
        ...mdx({
          jsxRuntime: 'automatic',
          providerImportSource: '@mdx-js/react'
        })
      },
      react(),
      UnoCSS(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹目录
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[name]'
        //svgo额外配置，具体配置参考https://github.com/svg/svgo
      })
    ],
    optimizeDeps: {
      include: [
        // 'react/jsx-runtime' // 因为这个文件不会显示引入，所以需要让vite提前预编译
      ]
    }
  };
});
