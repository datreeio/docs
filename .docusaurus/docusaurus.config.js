/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Datree docs",
  "tagline": "Dinosaurs are cool",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.png",
  "organizationName": "Datree.io",
  "projectName": "Datree docs",
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "sitemap": {
          "changefreq": "weekly",
          "priority": 0.5
        },
        "gtag": {
          "trackingID": "GTM-K7BG7K2",
          "anonymizeIP": true
        },
        "docs": {
          "sidebarPath": "/Users/harel/Desktop/react/datree/datree-hub/sidebars.js",
          "breadcrumbs": true,
          "routeBasePath": "/",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "/Users/harel/Desktop/react/datree/datree-hub/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Datree Logo",
        "src": "img/datree-logo.png",
        "srcDark": "img/logo-dark.png"
      },
      "items": [
        {
          "href": "https://github.com/datreeio/datree",
          "label": "GitHub",
          "position": "right"
        },
        {
          "type": "search",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "logo": {
        "alt": "Datree Logo",
        "src": "img/logo-dark.png"
      },
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/datreeio/datree"
            },
            {
              "label": "Youtube",
              "href": "https://www.youtube.com/results?search_query=datree+kubernetes"
            },
            {
              "label": "Dev.to",
              "href": "https://dev.to/search?q=datree"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/datreeio"
            },
            {
              "label": "Slack",
              "href": "https://datreecommunity.slack.com/?redir=%2Fssb%2Fredirect"
            }
          ]
        },
        {
          "title": "Sitemap",
          "items": [
            {
              "label": "Getting started",
              "href": "/"
            },
            {
              "label": "Built in rules",
              "href": "/built-in-rules"
            },
            {
              "label": "Custom rules",
              "href": "/custom-rules"
            },
            {
              "label": "Integrations",
              "href": "/integrations"
            },
            {
              "label": "Community integrations",
              "href": "/community-integrations"
            },
            {
              "label": "CI/CD examples",
              "href": "/cicd-examples"
            },
            {
              "label": "FAQ",
              "href": "/faq"
            },
            {
              "label": "Troubleshooting",
              "href": "/troubleshooting"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Datree.io"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "autoCollapseSidebarCategories": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
