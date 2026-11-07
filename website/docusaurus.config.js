// @ts-check
const path = require('path');
const remarkGithubAlerts = require('./plugins/remark-github-alerts');

const organizationName = 'Camburgerhelpers';
const projectName = 'Poweramp-Player-Technical-Handbook';

const handbookDir = path.resolve(__dirname, '../handbook');

function slugifySegment(segment) {
  const partMatch = segment.match(/^Part\s+(\d+)\s*-/i);
  if (partMatch) {
    return `part-${partMatch[1]}`;
  }
  if (/^00\s+Front\s+Matter$/i.test(segment)) {
    return 'front-matter';
  }
  if (/^Settings\s+Reference$/i.test(segment)) {
    return 'settings-reference';
  }
  if (/^Appendices$/i.test(segment)) {
    return 'appendices';
  }
  return segment
    .toLowerCase()
    .replace(/['"`]/g, '')
    .replace(/[^a-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function computeSlug(filePath) {
  const rel = path.relative(handbookDir, filePath).replace(/\\/g, '/');
  if (rel === 'README.md') {
    return '/';
  }
  const withoutExt = rel.replace(/\.mdx?$/i, '');
  const segments = withoutExt.split('/');
  const mappedSegments = segments.map((seg, idx) => {
    if (idx === segments.length - 1 && seg.toLowerCase() === 'index' && segments.length > 1) {
      return '';
    }
    return slugifySegment(seg);
  }).filter(Boolean);

  return '/' + mappedSegments.join('/');
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Poweramp Player Technical Handbook',
  tagline: 'A technical reference for Poweramp Player build 1031',
  favicon: 'img/favicon.ico',

  url: `https://${organizationName.toLowerCase()}.github.io`,
  baseUrl: `/${projectName}/`,
  trailingSlash: false,

  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: ({ url, sourceFilePath }) => {
        if (url.includes('LICENSE') || url === '../LICENSE') {
          return `https://github.com/${organizationName}/${projectName}/blob/main/LICENSE`;
        }
        if (url.includes('THIRD-PARTY-NOTICE') || url === '../THIRD-PARTY-NOTICE.md') {
          return `https://github.com/${organizationName}/${projectName}/blob/main/THIRD-PARTY-NOTICE.md`;
        }
        if (url.includes('PUBLICATION-MANIFEST.json')) {
          return `https://github.com/${organizationName}/${projectName}/blob/main/handbook/PUBLICATION-MANIFEST.json`;
        }
        if (url.endsWith('.json')) {
          const filename = url.split('/').pop();
          return `https://github.com/${organizationName}/${projectName}/blob/main/handbook/Appendices/Settings%20Reference/${filename}`;
        }
        throw new Error(`Broken markdown link: "${url}" in "${sourceFilePath}"`);
      },
    },
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      if (!result.frontMatter.slug) {
        result.frontMatter.slug = computeSlug(params.filePath);
      }
      return result;
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/',
        docsDir: '../handbook',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          path: '../handbook',
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/handbook/`,
          showLastUpdateTime: true,
          beforeDefaultRemarkPlugins: [remarkGithubAlerts],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'alpha_notice',
        content: 'Unofficial community alpha. Not affiliated with Poweramp. Documents build 1031.',
        isCloseable: false,
      },
      navbar: {
        title: 'Poweramp Technical Handbook',
        items: [
          {
            to: '/front-matter/01-master-table-of-contents',
            label: 'Contents',
            position: 'left',
          },
          {
            to: '/front-matter/03-quick-start',
            label: 'Quick Start',
            position: 'left',
          },
          {
            to: '/appendices/settings-reference',
            label: 'Settings Reference',
            position: 'left',
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Poweramp Player Technical Handbook · Unofficial community documentation for build 1031.`,
      },
    }),
};

module.exports = config;
