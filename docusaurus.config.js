// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stima API 使用指南',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.stima.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Stima-Tech', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hant': {
        label: '繁體中文',
        direction: 'ltr',
        htmlLang: 'zh-TW',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/hover-highlight.css',
          ]
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
        indexDocs: true,
        // indexBlog: true,
        indexPages: true,
        docsDir: "docs",
        // blogDir: "blog",
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      image: 'img/logo.png',
      navbar: {
        title: 'Stima API 使用指南',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          href: 'https://docs.stima.tech',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: '所有文件',
          // },
          {
            type: 'doc',
            docId: 'usage',
            position: 'left',
            label: '使用場景',
          },
          {
            type: 'doc',
            docId: 'installation/chatbox',
            position: 'left',
            label: '安裝及應用',
          },
          {
            type: 'doc',
            docId: 'stimachat',
            position: 'left',
            label: 'StimaChat 對話系統',
          },
          {
            type: 'doc',
            docId: 'opensource',
            position: 'left',
            label: '開源模型',
          },
          {
            type: 'doc',
            docId: 'cursor',
            position: 'left',
            label: 'Cursor IDE 優惠訂閱方案',
          },
          {
            href: 'https://api.stima.tech',
            label: 'Stima API 官網',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服務',
            items: [
              {
                label: 'Stima API 官網',
                href: 'https://api.stima.tech',
              },
              {
                label: 'StimaChat 對話系統',
                href: 'https://chat.stima.tech',
              },
              {
                label: 'Stima Research 研究報告',
                href: 'https://blog.stima.tech',
              },
              {
                label: 'Playground',
                href: 'https://playground.stima.tech',
              },
              {
                label: 'Stima Tech 伺服器狀態',
                href: 'https://status.stima.tech',
              },
              {
                label: 'Cursor IDE 歷史版本安裝檔',
                href: 'https://share.stima.tech/share/68cSU4FR',
              },
            ],
          },
          {
            title: '聯繫我們',
            items: [
              {
                label: 'Email',
                href: 'mailto:support@stima.tech',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/stimaai/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/stimatech',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/stima-ai/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stima-tech',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 - 2025 Stima AI, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
