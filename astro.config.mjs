// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site:'https://jiadbuniverse.github.io/jdb_web-home/',
    integrations: [starlight({
        title: '记多宝',
        
        social: {
            github: 'https://github.com/JiaDBUniverse/jdb_web-home',
        },
        customCss: [
            // 你的 Tailwind 基础样式的相对路径
            './src/tailwind.css',
        ],
        defaultLocale: 'root',
        locales: {
            root: {
                label: '简体中文',
                lang: 'zh-CN'
            },
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
    }), tailwind({
        // 禁用默认的基础样式
        applyBaseStyles: false,
    })],
});