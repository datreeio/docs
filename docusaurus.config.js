// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Datree docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Datree.io', // Usually your GitHub org/user name.
  projectName: 'Datree docs', // Usually your repo name.

  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'GTM-K7BG7K2',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          routeBasePath: '/',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Datree Logo',
          src: 'img/datree-logo.png',
          srcDark: 'img/logo-dark.png',
        },
        items: [
          {
            href: 'https://github.com/datreeio/datree',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      // footer
      footer: {
        logo: {
          alt: 'Datree Logo',
          src: 'img/logo-dark.png',
        },
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/datreeio/datree',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/results?search_query=datree+kubernetes',
              },
              {
                label: 'Dev.to',
                href: 'https://dev.to/search?q=datree',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datreeio',
              },
              {
                label: 'Slack',
                href: 'https://datreecommunity.slack.com/?redir=%2Fssb%2Fredirect',
              },
            ],
          },
          {
            title: 'Sitemap',
            items: [
              {
                label: 'Getting started',
                href: '/',
              },
              {
                label: 'Built in rules',
                href: '/built-in-rules',
              },
              {
                label: 'Custom rules',
                href: '/custom-rules',
              },
              {
                label: 'Integrations',
                href: '/integrations',
              },
              {
                label: 'Community integrations',
                href: '/community-integrations',
              },
              {
                label: 'CI/CD examples',
                href: '/cicd-examples',
              },
              {
                label: "FAQ's",
                href: '/faq',
              },
              {
                label: 'Troubleshooting',
                href: '/troubleshooting',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Datree.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
