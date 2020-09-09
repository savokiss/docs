module.exports = {
  title: 'docs',
  description: 'Just some useful documents',
  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-118078150-1'
    }],
    ['@vuepress/last-updated', {
      dateOptions: {
        hour12: false,
        timeZone: 'Asia/Shanghai'
      }
    }]
  ],
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
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue Best Practices', link: 'https://vue-better-practice.savokiss.com' }
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
        title: 'Git Flow',
        children: [
          '/git-flow/github',
          '/git-flow/gitlab-version',
          '/git-flow/gitlab-continuous',
          '/git-flow/git'
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
          '/snippets/algorithm',
          '/snippets/vue'
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