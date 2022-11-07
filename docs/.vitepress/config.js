module.exports = {
  title: 'Developer Docs',
  description: 'Just some useful documents',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', {src: 'https://www.googletagmanager.com/gtag/js?id=G-SFSR5RSG46'}],
    ['script', {}, `G-SFSR5RSG46`]
  ],
  themeConfig: {
    repo: 'savokiss/docs',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Vue Best Practices', link: 'https://vue-better-practice.savokiss.com' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/savokiss/docs' },
      { icon: 'discord', link: 'https://savokiss.com' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present savokiss'
    },
    sidebar: [
      {
        text: 'Style Guide',
        items: [
          { text: 'Git Commit Message', link: '/style-guide/git-commit-message' },
          { text: 'Git Branching Model', link: '/style-guide/git-branching' },
          { text: 'Git Tag', link: '/style-guide/git-tagging' },
          { text: 'Vue', link: '/style-guide/vue' },
        ]
      },
      {
        text: 'Git Flow',
        items: [
          { text: 'GitHub Flow', link: '/git-flow/github' },
          { text: 'GitLab Version Flow', link: '/git-flow/gitlab-version' },
          { text: 'GitLab Continuous Flow', link: '/git-flow/gitlab-continuous' },
          { text: 'Git Flow', link: '/git-flow/git' },
        ]
      },
      {
        text: 'Interview',
        items: [
          { text: 'Frontend', link: '/interview/fe' },
          { text: 'Vue', link: '/interview/vue' },
        ]
      },
      {
        text: 'Snippets',
        items: [
          { text: 'JavaScript', link: '/snippets/javascript' },
          { text: 'CSS', link: '/snippets/css' },
          { text: 'Algroithm', link: '/snippets/algorithm' },
          { text: 'Vue', link: '/snippets/vue' },
        ]
      },
      {
        text: 'Websites',
        items: [
          { text: 'Blogs', link: '/websites/blogs' },
          { text: 'Books', link: '/websites/books' },
          { text: 'CheatSheets', link: '/websites/cheatsheets' },
          { text: 'Coding', link: '/websites/coding' },
          { text: 'Discovery', link: '/websites/discovery' },
          { text: 'Tools', link: '/websites/tools' },
          { text: 'Tutorials', link: '/websites/tutorials' },
        ]
      }
    ]
  }
}