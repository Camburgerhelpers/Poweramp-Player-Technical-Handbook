/**
 * Remark plugin for Poweramp Handbook:
 * 1. Transform GitHub-style alert blockquotes:
 *    > [!NOTE]
 *    > [!TIP]
 *    > [!IMPORTANT]
 *    > [!WARNING]
 *    > [!CAUTION]
 *    into Docusaurus admonitions.
 * 2. Rewrite outside-the-docs links (LICENSE, THIRD-PARTY-NOTICE.md, JSON manifests)
 *    to their canonical GitHub repository URLs.
 */

const organizationName = 'Camburgerhelpers';
const projectName = 'Poweramp-Player-Technical-Handbook';
const githubBlobRoot = `https://github.com/${organizationName}/${projectName}/blob/main`;

// GitHub alert keyword -> Docusaurus admonition type
const ALERT_TYPES = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'info',
  WARNING: 'warning',
  CAUTION: 'danger',
};
const ALERT_MARKER = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\r?\n)?/i;

const isRootFile = (url, name) =>
  url === name || url === `../${name}` || url.endsWith(`/${name}`);

/**
 * Returns the canonical GitHub URL for a link that points outside the docs
 * folder, or null when the link should be left untouched.
 */
function rewriteUrl(url) {
  let cleanUrl;
  try {
    cleanUrl = decodeURIComponent(url);
  } catch {
    return null; // malformed escape sequence: leave the link as authored
  }

  if (isRootFile(cleanUrl, 'LICENSE')) {
    return `${githubBlobRoot}/LICENSE`;
  }
  if (isRootFile(cleanUrl, 'THIRD-PARTY-NOTICE.md')) {
    return `${githubBlobRoot}/THIRD-PARTY-NOTICE.md`;
  }
  if (cleanUrl.includes('PUBLICATION-MANIFEST.json')) {
    return `${githubBlobRoot}/handbook/PUBLICATION-MANIFEST.json`;
  }
  if (cleanUrl.endsWith('.json')) {
    const filename = cleanUrl.split('/').pop();
    return filename === 'Coverage Manifest.json'
      ? `${githubBlobRoot}/handbook/Appendices/Settings%20Reference/Coverage%20Manifest.json`
      : `${githubBlobRoot}/handbook/${filename}`;
  }
  return null;
}

/**
 * Converts a GitHub-style alert blockquote into an admonition, in place.
 * Does nothing when the blockquote does not start with an alert marker.
 */
function transformAlert(node) {
  const firstChild = node.children?.[0];
  const firstInline = firstChild?.type === 'paragraph' ? firstChild.children?.[0] : null;
  if (firstInline?.type !== 'text') return;

  const match = firstInline.value.match(ALERT_MARKER);
  if (!match) return;
  const alertType = ALERT_TYPES[match[1].toUpperCase()];

  // Slice off the [!TYPE] marker
  const remainingText = firstInline.value.slice(match[0].length);
  if (remainingText) {
    firstInline.value = remainingText;
  } else {
    firstChild.children.shift();
  }

  // Remove empty paragraph if nothing left
  if (firstChild.children.length === 0) {
    node.children.shift();
  }

  // Transform to containerDirective and admonition HAST properties
  node.type = 'containerDirective';
  node.name = alertType;
  node.data = node.data || {};
  node.data.hName = 'admonition';
  node.data.hProperties = { ...node.data.hProperties, type: alertType };
}

function remarkGithubAlerts() {
  return (tree) => {
    function visit(node) {
      if (!node) return;

      if (node.type === 'blockquote') {
        transformAlert(node);
      }

      if (node.type === 'link' && typeof node.url === 'string') {
        node.url = rewriteUrl(node.url) ?? node.url;
      }

      node.children?.forEach(visit);
    }

    visit(tree);
  };
}

module.exports = remarkGithubAlerts;
