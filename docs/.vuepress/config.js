module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        [
            'script',
            {  async: true, src: 'https://analytics.ikaros.run/script.js', 'data-website-id': '4b7446e4-2890-4f43-830e-f6e1eada32b2' }
        ]
    ],
    title: 'Ikaros',
    description: '一个专注于ACGMN的内容管理系统 | A java content manager system for anime, comic, game, music and novels.',
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '文档', link: 'https://docs.ikaros.run', target:'_blank' },
            { text: 'GitHub', link: 'https://github.com/ikaros-dev/ikaros', target:'_blank' }
        ],
        lastUpdated: '最后更新时间',
        sidebar: 'auto',
        displayAllHeaders: true,
        search: false,
    }

}