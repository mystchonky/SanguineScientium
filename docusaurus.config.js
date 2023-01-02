// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Blood Magic: Alchemical Wizardry',
  tagline: 'Gruesome? Probably. Worth it? Definitely!',
  url: 'https://luiq54.github.io/',
  baseUrl: '/BloodMagic-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/orb.png',
  organizationName: 'luiq54',
  projectName: 'BloodMagic-Docs',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/luiq54/BloodMagic-Docs/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          // autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'Blood Magic: Alchemical Wizardry',
        logo: {
          alt: 'Blood Magic',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/luiq54/BloodMagic-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;