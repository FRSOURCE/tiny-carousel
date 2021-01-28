const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();

module.exports = {
    title: 'Tiny carousel',
    description: 'Plugin for i18next that paires well with Phrase In-Context Editor.',
    base: '/tiny-carousel/',
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            ...nav,
            { text: 'Looking for Web wizards?', link: 'https://www.frsource.org/' }
        ],
        sidebar,
        searchPlaceholder: 'Search in docs...',
        repo: 'frsource/tiny-carousel',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page on GitHub',
        smoothScroll: true,
        displayAllHeaders: true,
        image: '/logo.jpg',
        domain: 'https://www.frsource.org/tiny-carousel/'
    },
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
        ['link', { as: 'style', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' }],
    ],
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
