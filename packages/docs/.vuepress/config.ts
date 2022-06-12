const fs = require('fs');
const { defaultTheme } = require('@vuepress/theme-default');
const { path } = require('@vuepress/utils');
const { pwaPlugin } = require('@vuepress/plugin-pwa');
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup');
const seoPlugin = require('vuepress-plugin-seo');
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { viteBundler } = require('vuepress');

const indexRE = /(^|.*\/)(index|readme)\.(md|vue)$/i;
const isIndexFile = (file: string) => indexRE.test(file);

module.exports = {
    title: 'Tiny carousel',
    description: 'Mobile & desktop-friendly, tiny, efficient (vanilaJS) carousel which takes advantage of CSS snap points (or polyfills it)!',
    base: '/tiny-carousel/',
    pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!CHANGELOG.md'],
    theme: defaultTheme({
        home: '/',
        logo: '/logo.svg',
        repo: 'frsource/tiny-carousel',
        navbar: [
            {
                text: 'Documentation',
                ariaLabel: 'Documentation Menu',
                children: [
                  { text: 'Guide', link: '/guide/' },
                  { text: 'Api reference', link: '/api-reference/' },
                  { text: 'Ecosystem', link: '/ecosystem/' }
                ]
            },
            { text: 'Contribution', link: '/contribution/' },
            { text: 'Looking for Web wizards?', link: 'https://www.frsource.org/' }
        ],
        sidebarDepth: 4,
        sidebar: getSideBar(),
        editLink: true,
        editLinkText: 'Help us improve this page on GitHub',
        docsDir: 'packages/docs',
    }),
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
        ['link', { as: 'style', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
        ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
        ['link', { rel: 'alternate icon', sizes: '32x32', href: '/favicon-32x32.png?v=2', type: 'image/png' }],
        ['link', { rel: 'alternate icon', sizes: '16x16', href: '/favicon-16x16.png?v=2', type: 'image/png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest?v=2' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
        ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=2' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=2', color: '#f150a0' }],
        ['meta', { name: 'msapplication-TileColor', content: '#f150a0' }]
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
    },
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        // [
        //     'vuepress-plugin-clean-urls',
        //     {
        //         normalSuffix: '/',
        //         indexSuffix: '/',
        //         notFoundPath: '/404.html',
        //     },
        // ],
        () => seoPlugin({
            title: ($page, $site) => $page.path === '/' ? $site.title : $page.title,
            description: ($page, $site) => $page.frontmatter.description || $site.description,
            type: $page => $page.path === '/' ? 'website' : 'article',
            image: ($page, $site) => {
                const image = $page.frontmatter.image || $site.themeConfig.image;
                return image && ((!image.startsWith('http') && $site.themeConfig.domain || '') + image)
            }
        }),
        () => ({
            name: 'scroll-anchor-into-view-plugin',
            clientConfigFile: path.resolve(__dirname, 'clientConfigs', 'scrollAnchorIntoView.ts')
        }),
        pwaPlugin(),
        pwaPopupPlugin({
            '/': {
                message: 'New content is available.',
                buttonText: 'Refresh',
            },
        })
    ],
    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    whitespace: 'preserve',
                },
            },
        },
    }),
}

function getSideBar() {
    const ignoreDirs = ['.turbo', '.vuepress', 'node_modules'];
    
    return fs
        .readdirSync(path.join(__dirname, '..'), { withFileTypes: true })
        .filter(item =>
            item.isDirectory() &&
            !ignoreDirs.includes(item.name.toLowerCase())
        )
        .reverse()
        .reduce((p, { name }) => {
            p['/' + name + '/'] = 
                fs.readdirSync(path.join(__dirname, '..', name), { withFileTypes: true })
                    .reduce((p, item) => {
                        if (item.isFile() && !isIndexFile(item.name)) {
                            p.push(path.sep + path.join(name, item.name));
                        }
                        return p;
                    }, [path.sep + path.join(name, 'README.md')]);
            return p;
        }, {})
}
