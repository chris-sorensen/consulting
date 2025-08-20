# consulting

![CI](https://github.com/chris-sorensen/consulting/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/chris-sorensen/consulting/actions/workflows/deploy.yml/badge.svg)

My marketing site for Fractional CTO & Cloud/SRE/DevSecOps consulting. Compliance-driven modernization for high-growth teams.

## Live site

[chris-sorensen.github.io/consulting](https://chris-sorensen.github.io/consulting/)

→ Lighthouse
[Report](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1755663229122-90690.report.html)

## Repo layout

- `index.html` – single-file site (Tailwind CDN)

- `.github/workflows/` – CI, preview, deploy

- `sitemap.xml`, `robots.txt` – SEO basics

## Local development

```bash
npx http-server -p 8080 .
