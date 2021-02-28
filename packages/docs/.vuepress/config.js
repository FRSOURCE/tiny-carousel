const fs = require('fs');
const path = require('path');
const { isIndexFile: { isIndexFile }, slugify } = require('@vuepress/shared-utils');

module.exports = {
    title: 'Tiny carousel',
    description: 'Plugin for i18next that paires well with Phrase In-Context Editor.',
    base: '/tiny-carousel/',
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        sidebarDepth: 2,
        logo: '/logo.svg',
        nav: [
            {
                text: 'Documentation',
                ariaLabel: 'Documentation Menu',
                items: [
                  { text: 'Guide', link: '/guide/' },
                  { text: 'Api reference', link: '/api-reference/' },
                  { text: 'Ecosystem', link: '/ecosystem/' }
                ]
            },
            { text: 'Contribution', link: '/contribution/' },
            { text: 'Looking for Web wizards?', link: 'https://www.frsource.org/' }
        ],
        sidebar: getSideBar(),
        searchPlaceholder: 'Search in docs...',
        repo: 'frsource/tiny-carousel',
        docsDir: 'packages/docs',
        editLinks: true,
        editLinkText: 'Help us improve this page on GitHub',
        smoothScroll: true,
        displayAllHeaders: true,
        sidebarDepth: 4,
        image: '/logo.jpg',
        domain: 'https://www.frsource.org/tiny-carousel/'
    },
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
        ['link', { as: 'style', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
    },
    plugins: [
        '@vuepress/last-updated',
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
        [
            'seo',
            {
                title: ($page, $site) => $page.path === '/' ? $site.title : $page.title,
                description: ($page, $site) => $page.frontmatter.description || $site.description,
                type: $page => $page.path === '/' ? 'website' : 'article',
                image: ($page, $site) => {
                    const image = $page.frontmatter.image || $site.themeConfig.image;
                    return image && ((!image.startsWith('http') && $site.themeConfig.domain || '') + image)
                }
            },
        ],
        [
            () => ({
                name: 'scroll-anchor-into-view-plugin',
                clientRootMixin: require('path').resolve(__dirname, 'mixins', 'scrollAnchorIntoView.js')
            })
        ]
    ],
}

function getSideBar() {
    const ignoreDirs = ['.vuepress', 'node_modules'];
    
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
                            const subPageName = item.name.substring(0, item.name.lastIndexOf('.'));
                            p.push(subPageName);
                        }
                        return p;
                    }, ['']);
            return p;
        }, {})
}
