module.exports = {
  title: 'docs',
  description: 'Just personal docs',
  ga: 'UA-118078150-1',
  // serviceWorker: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: 'savokiss/docs',
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue Best Practices', link: 'https://vue-better-practices.savokiss.me' }
    ],
    sidebar: [
      {
        title: 'Style Guide',
        children: [
          '/style-guide/git-commit-message',
          '/style-guide/git-branching',
          '/style-guide/git-tagging',
          '/style-guide/vue'
        ]
      },
      {
        title: 'Interview',
        children: [
          '/interview/fe',
          '/interview/vue'
        ]
      },
      {
        title: 'Snippets',
        children: [
          '/snippets/javascript',
          '/snippets/css',
          '/snippets/algorithm'
        ]
      },
      {
        title: 'Websites',
        children: [
          '/websites/blogs',
          '/websites/books',
          '/websites/cheatsheets',
          '/websites/coding',
          '/websites/discovery',
          '/websites/tools',
          '/websites/tutorials'
        ]
      }
    ]
  }
}