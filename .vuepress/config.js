module.exports = {
  title: 'docs',
  description: 'Just personal docs',
  ga: 'UA-118078150-1',
  serviceWorker: true,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  themeConfig: {
    repo: 'savokiss/docs',
    // docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue Best Practices', link: 'https://vue-better-practices.savokiss.me' }
    ],
    sidebar: [
      {
        title: 'Style Guide',
        children: [
          '/docs/style-guide/git',
          '/docs/style-guide/vue'
        ]
      },
      {
        title: 'Interview',
        children: [
          '/docs/interview/fe'
        ]
      },
      {
        title: 'Snippets',
        children: [
          '/docs/snippets/javascript',
          '/docs/snippets/css'
        ]
      },
      {
        title: 'Websites',
        children: [
          '/docs/websites/blogs',
          '/docs/websites/books',
          '/docs/websites/cheatsheets',
          '/docs/websites/coding',
          '/docs/websites/discovery',
          '/docs/websites/tools'
        ]
      }
    ]
  }
}