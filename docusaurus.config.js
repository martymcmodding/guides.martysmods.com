import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Marty's Mods Guides",
  tagline: 'Your extensive guide site for all things ReShade.',
  favicon: 'img/favicon.ico',
  url: 'https://guides.martysmods.com',
  baseUrl: '/',
  organizationName: 'MartysMods',
  projectName: 'guides.martysmods.com',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
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
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Marty's Mods Logo",
          src: 'img/mmlogo.webp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ReShade',
            position: 'left',
            label: 'ReShade',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Shaders',
            position: 'left',
            label: 'Shaders',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Additional Guides',
            position: 'left',
            label: 'Additional Guides',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'ReShade',
                to: '/reshade/downloading',
              },
              {
                label: 'Shaders',
                to: '/category/immerse',
              },
              {
                label: 'Additional Guides',
                to: '/category/rendering-api-wrappers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: "Marty's Mods Discord",
                href: 'https://discord.gg/wY49KMxjHT',
              },
              {
                label: "ReShade's Discord",
                href: 'https://discord.gg/PrwndfH',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Website',
                href: 'https://martysmods.com',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/c/mcflypg/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@martysmods/videos',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark', // Force dark mode
        disableSwitch: true, // Disable the light/dark mode toggle
        respectPrefersColorScheme: false, // Ignore the user's system preference
      },
    }),
};
export default config;
