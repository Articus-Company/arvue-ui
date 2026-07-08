import { resolve } from 'node:path'
import { HstVue } from '@histoire/plugin-vue'
import alias from '@rollup/plugin-alias'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const projectRootDir = resolve(__dirname)

export default defineConfig({
    plugins: [
        vue(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: resolve(projectRootDir, '../packages/arvue-ui/src'),
                },
                {
                    find: '@lib',
                    replacement: resolve(projectRootDir, '../packages/arvue-ui/lib'),
                },
            ],
        }),
    ],
    resolve: {
        alias: {
            /**
             * vite postcss не резолвит прямые пути до стилей
             * @see packages/arvue-ui/src/sonner/sonner.css
             */
            'vue-sonner/lib/index.css': 'vue-sonner/style.css',
        },
    },
    histoire: {
        plugins: [HstVue()],
        setupFile: './histoire.setup.ts',
        storyMatch: [resolve(projectRootDir, '../packages/arvue-ui/src/**/*.story.vue')],
        tree: {
            groups: [{ title: 'Components', include: _file => true }],
        },
        theme: {
            title: 'Arvue UI',
            logo: {
                square: '../img/logo.svg',
                light: '../img/logo.svg',
                dark: '../img/logo.svg',
            },
        },
    },
    server: {
        fs: {
            // Allow serving files from two level up to the project root
            allow: ['..'],
        },
    },
})
