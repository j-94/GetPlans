const withNextra = require('nextra')({
  basePath: '/docs',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()
