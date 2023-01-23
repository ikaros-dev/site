module.exports = {
    title: 'Ikaros开源',
    description: '一个专注于ACGMN的内容管理系统 | A java content manager system for anime, comic, game, music and novels.',
    themeConfig: {
        logo: '/assets/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/guide/' },
            {
                text: '版本',
                items: [
                    { text: 'v0.1.0', link: '/' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/ikaros-dev/ikaros', target:'_blank' }
        ],
        lastUpdated: '最后更新时间',
        // sidebar: 'auto',
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ],
        displayAllHeaders: true,
        repo: 'ikaros-dev/site',
        repoLabel: 'Site GitHub',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        smoothScroll: true
    }

}