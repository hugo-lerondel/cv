/**
 * Formats a date range for display.
 * @param {string} start - Start year or date
 * @param {string|null} end - End year or date, null means "present"
 * @returns {string}
 */
export function formatDateRange(start, end) {
  const endLabel = end ?? 'Présent';
  return `${start} – ${endLabel}`;
}

/**
 * Creates an anchor element string for external links.
 * @param {string} href - URL
 * @param {string} label - Display text
 * @param {string} [cssClass] - Optional CSS class
 * @returns {string}
 */
export function linkHtml(href, label, cssClass = '') {
  const classAttr = cssClass ? ` class="${cssClass}"` : '';
  return `<a href="${href}" target="_blank" rel="noopener noreferrer"${classAttr}>${label}</a>`;
}

/**
 * Strips the protocol and www from a URL for display.
 * @param {string} url
 * @returns {string}
 */
export function formatUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '');
}
