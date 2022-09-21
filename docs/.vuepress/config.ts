// import { defineUserConfig } from 'vuepress'
// import { defaultTheme } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { searchPlugin } from '@vuepress/plugin-search'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'
// import { pwaPlugin } from '@vuepress/plugin-pwa'

// export default defineUserConfig({
//     lang: 'zh-CN',
//     title: '大学生医保完全攻略',
//     description: '大学生医保完全攻略（适用于成都中医药大学）',
//     theme: defaultTheme({
//         navbar: [
//             {
//                 text: 'Home',
//                 link: '/',
//             },
//         ],
//     }),
// })

export default {
    lang: 'zh-CN',
    title: '大学生医保完全攻略',
    description: '大学生医保完全攻略（适用于成都中医药大学）',
    head: [
        ['link', { rel: 'icon', href: '/images/logo-32.png' }],
        // ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        // ['meta', { name: 'theme-color', content: '#9d2236' }],
    ],
    // base: '/Medical_Insurance_for_College_Students_CDUTCM_wiki/',
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
                // activeMatch: '/'
            },
            {
                text: '指南',
                link: '/guide/',
                // activeMatch: '^/guide/'
            },
            // {
            //     text: '共建',
            //     link: '/contributing'
            // },
            {
                text: '关于',
                link: '/about',
                // activeMatch: '^/about/'
            }
        ],
        logo: 'images/CDUTCM.png',
        repo: 'https://github.com/Lucas-Wong-Dev/Medical_Insurance_for_College_Students_CDUTCM_wiki',
        // repoLabel: '123',
        editLinkText: '如有错误，请点击此处反馈',
        lastUpdatedText: '更新于',
        contributorsText: '本部分内容的贡献者',
        tip: '提醒',
        warning: '注意',
        danger: '务必注意',
        notFound: ['您访问的页面不存在'],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换色彩模式',
        toggleSidebar: '打开或关闭侧边栏',
        selectLanguageAriaLabel: '选择语言',
        sidebar: {
            '/guide/': [
                'README.md',
                '大学生医保和城镇居民基本医疗保险之间的关系是什么？.md',
                '谁能参加大学生医保？.md',
                '定点医疗机构首诊制和首诊医疗机构是什么？.md',
                '参保后能享受哪些待遇？最高能报销多少？ .md',
                '大学生医保的待遇有效期是多少？.md',
                '如何参加大学生医保？.md',
                '社会保障卡.md',
                '如何通过大学生医保进行报销？.md',
            ]
        }
    }),
    plugins: [
        nprogressPlugin(),
        searchPlugin({
            // options
        }),
        // docsearchPlugin({ appId: 's', apiKey: 's', indexName: 'd' }),
        // pwaPlugin({
        //     skipWaiting: false,
        //     serviceWorkerFilename: 'service-worker.js',
        // }),
    ],
}