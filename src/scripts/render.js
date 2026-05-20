import { formatDateRange, linkHtml, formatUrl } from '../utils/format.js';

/**
 * Renders the page header (name, title, intro, contacts).
 * @param {object} profile
 * @returns {string}
 */
export function renderHeader(profile) {
  const contacts = buildContactItems(profile);
  const photo = renderPhoto(profile);

  return `
    <header class="cv-header">
      <div class="cv-header__top">
        <div class="cv-header__left">
          <div class="cv-header__identity">
            <h1 class="cv-header__name">${profile.name}</h1>
            <p class="cv-header__title">${profile.title}</p>
          </div>
        </div>
        ${photo}
      </div>
      <p class="cv-header__intro">${profile.intro}</p>
      <ul class="cv-header__contacts">
        ${contacts}
      </ul>
    </header>
  `;
}

function renderPhoto(profile) {
  if (profile.photo) {
    return `
      <div class="cv-header__photo">
        <img src="${profile.photo}" alt="Photo de ${profile.name}" class="cv-header__photo-img" />
      </div>
    `;
  }
  const initials = profile.name
    .split(' ')
    .filter((n) => n.length > 0)
    .map((n) => n[0])
    .slice(0, 2)
    .join('');
  return `
    <div class="cv-header__photo cv-header__photo--placeholder">
      <span class="cv-header__photo-initials">${initials}</span>
    </div>
  `;
}

function buildContactItems(profile) {
  const items = [];

  if (profile.email) {
    items.push(contactItem('✉', linkHtml(`mailto:${profile.email}`, profile.email, 'contact-link')));
  }
  if (profile.phone) {
    items.push(contactItem('📱', `<span>${profile.phone}</span>`));
  }
  if (profile.location) {
    items.push(contactItem('📍', `<span>${profile.location}</span>`));
  }
  if (profile.github) {
    items.push(contactItem('⌥', linkHtml(profile.github, formatUrl(profile.github), 'contact-link')));
  }
  if (profile.linkedin) {
    items.push(contactItem('in', linkHtml(profile.linkedin, 'LinkedIn', 'contact-link'), 'contact-item--linkedin'));
  }
  if (profile.website) {
    items.push(contactItem('🌐', linkHtml(profile.website, formatUrl(profile.website), 'contact-link')));
  }

  return items.join('\n');
}

function contactItem(icon, content, extraClass = '') {
  const classes = `contact-item${extraClass ? ' ' + extraClass : ''}`;
  return `<li class="${classes}"><span class="contact-item__icon">${icon}</span>${content}</li>`;
}

/**
 * Renders the experiences section.
 * @param {Array} experiences
 * @returns {string}
 */
export function renderExperience(experiences) {
  if (!experiences || experiences.length === 0) return '';

  const items = experiences
    .map((exp) => renderExperienceItem(exp))
    .join('\n');

  return `
    <section class="cv-section cv-section--experience">
      <h2 class="cv-section__title">Expériences</h2>
      <div class="cv-section__content">
        ${items}
      </div>
    </section>
  `;
}

function renderExperienceItem(exp) {
  const dateRange = formatDateRange(exp.start, exp.end ?? null);
  const bullets = exp.description
    .map((d) => `<li class="exp-item__bullet">${d}</li>`)
    .join('\n');
  const stack = exp.stack
    ? exp.stack.map((s) => `<span class="badge">${s}</span>`).join('\n')
    : '';

  return `
    <article class="exp-item">
      <div class="exp-item__header">
        <div class="exp-item__meta">
          <h3 class="exp-item__role">${exp.role}</h3>
          <p class="exp-item__company">${exp.company} <span class="exp-item__location">· ${exp.location}</span></p>
        </div>
        <span class="exp-item__dates">${dateRange}</span>
      </div>
      <ul class="exp-item__bullets">
        ${bullets}
      </ul>
      ${stack ? `<div class="exp-item__stack">${stack}</div>` : ''}
    </article>
  `;
}

/**
 * Renders the education section.
 * @param {Array} education
 * @returns {string}
 */
export function renderEducation(education) {
  if (!education || education.length === 0) return '';

  const items = education
    .map((edu) => renderEducationItem(edu))
    .join('\n');

  return `
    <section class="cv-section cv-section--education">
      <h2 class="cv-section__title">Études</h2>
      <div class="cv-section__content">
        ${items}
      </div>
    </section>
  `;
}

function renderEducationItem(edu) {
  const dateRange = formatDateRange(edu.start, edu.end ?? null);

  return `
    <article class="edu-item">
      <div class="edu-item__header">
        <div class="edu-item__meta">
          <h3 class="edu-item__degree">${edu.degree}</h3>
          <p class="edu-item__school">${edu.school} <span class="edu-item__location">· ${edu.location}</span></p>
          ${edu.specialization ? `<p class="edu-item__spec">${edu.specialization}</p>` : ''}
        </div>
        <span class="edu-item__dates">${dateRange}</span>
      </div>
    </article>
  `;
}

/**
 * Renders the technical skills section.
 * @param {object} technicalSkills - { category: [skill, ...], ... }
 * @returns {string}
 */
export function renderTechnicalSkills(technicalSkills) {
  if (!technicalSkills) return '';

  const categories = Object.entries(technicalSkills)
    .map(([category, skills]) => {
      const tags = skills.map((s) => `<span class="badge">${s}</span>`).join('\n');
      return `
        <div class="skills-group">
          <h4 class="skills-group__label">${category}</h4>
          <div class="skills-group__tags">${tags}</div>
        </div>
      `;
    })
    .join('\n');

  return `
    <section class="cv-section cv-section--skills">
      <h2 class="cv-section__title">Compétences techniques</h2>
      <div class="cv-section__content">
        ${categories}
      </div>
    </section>
  `;
}

/**
 * Renders the soft skills section.
 * @param {string[]} softSkills
 * @returns {string}
 */
export function renderSoftSkills(softSkills) {
  if (!softSkills || softSkills.length === 0) return '';

  const tags = softSkills.map((s) => `<span class="badge badge--soft">${s}</span>`).join('\n');

  return `
    <section class="cv-section cv-section--soft">
      <h2 class="cv-section__title">Savoir-être</h2>
      <div class="cv-section__content">
        <div class="soft-skills__tags">${tags}</div>
      </div>
    </section>
  `;
}

/**
 * Renders the languages section.
 * @param {Array} languages - [{ name, level }, ...]
 * @returns {string}
 */
export function renderLanguages(languages) {
  if (!languages || languages.length === 0) return '';

  const items = languages
    .map(
      (lang) => `
      <li class="lang-item">
        <span class="lang-item__name">${lang.name}</span>
        <span class="lang-item__level">${lang.level}</span>
      </li>
    `
    )
    .join('\n');

  return `
    <section class="cv-section cv-section--languages">
      <h2 class="cv-section__title">Langues</h2>
      <div class="cv-section__content">
        <ul class="lang-list">${items}</ul>
      </div>
    </section>
  `;
}

/**
 * Assembles and renders the full CV into the #app container.
 * @param {object} data - CV JSON data
 */
export function renderCV(data) {
  const app = document.getElementById('app');
  if (!app) return;

  const header = renderHeader(data.profile);
  const experience = renderExperience(data.experience);
  const education = renderEducation(data.education);
  const technicalSkills = renderTechnicalSkills(data.skills.technical);
  const softSkills = renderSoftSkills(data.skills.soft);
  const languages = renderLanguages(data.skills.languages);

  app.innerHTML = `
    <div class="cv-wrapper">
      <div class="cv-card">
        ${header}
        <main class="cv-body">
          <div class="cv-main">
            ${experience}
            ${education}
          </div>
          <aside class="cv-sidebar">
            ${technicalSkills}
            ${softSkills}
            ${languages}
          </aside>
        </main>
      </div>
    </div>
  `;
}
