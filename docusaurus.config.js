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

  plugins: [
    [
      'docusaurus-plugin-sass', {
      },
    ],
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-K7BG7K2',
      }
    ],
    [
      require.resolve("docusaurus-plugin-image-zoom"),{}
    ],

  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          routeBasePath: '/',
          editUrl:
            'https://github.com/datreeio/docs/tree/main/',
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
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/datreeio/datree',
            position: 'right',
            className: 'navbar-menu',
          },
          {
            href: 'https://app.datree.io',
            position: 'right',
            label: 'Sign up | Login',
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
                label: 'CI/CD examples',
                href: '/cicd-examples',
              },
              {
                label: "DATA PRIVACY",
                href: '/data-privacy',
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
      algolia: {
        appId: 'VBCXPB7UFQ',
  
        // Public API key: it is safe to commit it
        apiKey: '6a129ce5a599323761caf4ac37846eac',
  
        indexName: 'datree',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        container: 'div',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
    }),
};

module.exports = config;
