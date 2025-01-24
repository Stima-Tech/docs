/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'doc',
      id: 'usage',
    },
    {
      type: 'category',
      label: '安裝及應用',
      collapsed: false,
      items: [
        'installation/chatbox',
        'installation/cline',
        'installation/connection',
        'installation/cursor',
        'installation/langchain',
        'installation/llamaindex',
        'installation/scripts',
        'installation/translate',
        'installation/continue',
      ],
    },
    {
      type: 'doc',
      id: 'stimachat',
    },
    {
      type: 'doc',
      id: 'opensource',
    },
  ],
};

export default sidebars;
