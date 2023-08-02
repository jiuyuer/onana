import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import {
  ElementPlusResolver,
  VantResolver
} from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
const pathSrc = path.resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    UnoCSS(),
    VueSetupExtend(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'vuex', '@vueuse/head', '@vueuse/core'],
      resolvers: [
        // VantResolver(),
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'components.d.ts')
    }),
    ElementPlus({
      useSource: true
    }),
    Inspect()
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
        // additionalData: `@use "@/styles/variables.scss";`
      }
    }
  }
});
