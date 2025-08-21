# consulting

![CI](https://github.com/chris-sorensen/consulting/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/chris-sorensen/consulting/actions/workflows/deploy.yml/badge.svg)
[![Lighthouse](https://img.shields.io/endpoint?url=https://chris-sorensen.github.io/consulting/reports/lighthouse/latest/shields.json)](https://chris-sorensen.github.io/consulting/reports/lighthouse/latest/)

My marketing site for Fractional CTO & Cloud/SRE/DevSecOps consulting. Compliance-driven modernization for high-growth teams.

## Live site

[chris-sorensen.github.io/consulting](https://chris-sorensen.github.io/consulting/)

## Repo layout

- `index.html` – site (Tailwind CDN)

- `.github/workflows/` – CI, preview, deploy, scanners

- `sitemap.xml`, `robots.txt` – SEO basics

## Local development

```bash
npx http-server -p 8080 .
