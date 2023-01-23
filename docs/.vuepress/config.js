module.exports = {
    head: [
        ['link', { rel: 'icon', href: 'assets/logo.png' }]
    ],
    title: 'Ikaros开源',
    description: '一个专注于ACGMN的内容管理系统 | A java content manager system for anime, comic, game, music and novels.',
    themeConfig: {
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