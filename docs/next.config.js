const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  basePath: '/docs', // This sets the base path for your Next.js app
  // Any other Next.js configuration options can be added here
});
