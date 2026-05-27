import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import webasyst from 'vite-plugin-webasyst'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        webasyst({ input: 'src/main.ts' }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        manifest: 'manifest.json',
    },
})
