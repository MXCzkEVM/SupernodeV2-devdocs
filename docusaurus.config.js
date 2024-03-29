// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "MXCzkEVM";
const projectName = "Moonchain-devdocs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MXC MoonChain zkEVM",
  tagline: "The next generation of DePIN Web3",
  url: `https://doc.mxc.com`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,
  // This script will check all MXC operations and if the system experiences any downtime It will notify with a small notification
  scripts: [
    {
      src: 'https://mxc.instatus.com/en/13076080/widget/script.js',
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // remarkPlugins: [math],
          // rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "MXC",
          src: "img/mxc.svg",
          href: "https://mxc.org",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "MXC zkEVM Moonchain Docs",
          },
          
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: "Github",
            position: "right",
          },
          {
            href: `https://mxc.instatus.com/`,
            label: "Status",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "zkEVM",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/mxcfoundation",
              },
              {
                label: "Twitter",
                href: "https://t.me/mxcfoundation",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://www.mxc.org/",
              },
              {
                label: "GitHub",
                href: `https://github.com/${organizationName}/${projectName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MXC DAO`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
