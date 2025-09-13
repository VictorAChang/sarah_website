# Copilot Instructions for AI Agents

## Project Overview
This is a simple static website for "Sarah" consisting of multiple HTML pages. The main entry point is `index.html`. The site is intended to be a personal or portfolio site, with navigation between pages like Home, About, Projects, and Contact.

## Key Files and Structure
- `index.html`: Main homepage. Contains navigation and references to other pages (e.g., `about.html`, `projects.html`, `contact.html`).
- Other HTML files (not present yet) are expected to follow the same structure as `index.html`.
- `styles.css`: Referenced in the HTML for styling. If not present, create it in the root directory.

## Patterns and Conventions
- All pages use a consistent header, navigation bar, and footer structure.
- Navigation links are relative and expect all HTML files to be in the project root.
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Keep CSS in a single `styles.css` file unless otherwise required.

## Developer Workflows
- No build tools or frameworks are used; this is a pure static site.
- To add a new page, copy the structure of `index.html` and update the `<main>` section and navigation links as needed.
- To update styles, edit `styles.css`.
- No automated tests or scripts are present or required.

## Integration Points
- No external dependencies or JavaScript frameworks are used by default.
- If adding interactivity, use plain JavaScript and link via `<script src="..."></script>` at the end of the `<body>`.

## Examples
- To add an "About" page: create `about.html` with the same header/footer as `index.html`.
- To update navigation, ensure all HTML files have matching `<nav>` sections.

## Additional Notes
- Keep the site accessible and responsive (see the viewport meta tag in `index.html`).
- If adding new conventions, document them here for future agents.
