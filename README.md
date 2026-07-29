# jponf Portfolio

Personal portfolio website built with **Angular** and **Bootstrap**.

## Development server

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`. The application auto-reloads on file changes.

## Building

```bash
npm run build
```

Compiles the project into the `docs/` directory, optimized for production.

## Deploying to GitHub Pages

Build the project, then push the `docs/` output to the `gh-pages` branch:

```bash
npm run build
cd docs
git init
git add .
git commit -m "deploy: build"
git push -f git@github.com:jponf/jponf.github.io.git master:gh-pages
```

## Running unit tests

```bash
npm test
```

Runs tests with the [Vitest](https://vitest.dev/) test runner.

## Project structure

```
src/
├── app/
│   ├── components/       # Shared reusable components (navbar, footer, cards)
│   ├── sections/         # Page sections (presentation, about, skills, etc.)
│   └── models/           # TypeScript interfaces
├── assets/               # Images and static assets
├── main.ts               # Application entry point
└── styles.scss           # Global styles
```

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
