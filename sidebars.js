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
    docs: [
    'start-here',
    'FAQs',
    'migrating',
      {
        type: 'category',
        label: 'Setting up the host machine',
        link: {
          type: 'generated-index',
        },
        collapsed: false,
        items: [
          'oneclickmethod',
          'manualmethod',
          'windows-install',
        ],
      },
      {
        type: 'category',
        label: 'Installing the VM',
        link: {
          type: 'generated-index',
        },
        collapsed: false,
        items: [
          'installing-macos',
          'finishing-up',
        ],
      },
      {
        type: 'category',
        label: 'Post-Install',
        link: {
          type: 'generated-index',
        },
        collapsed: false,
        items: [
          'guide-performance',
          'guide-networking',
          'guide-passthrough',
          'guide-screen-resolution',
          'guide-resizing',
          'guide-Apple-ID',
          'guide-disabling-verbose'
        ],
      },
    ],
}
    module.exports = sidebars
