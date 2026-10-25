# DSR Pharmachem — Next.js source project

Editable Next.js App Router reconstruction of the supplied public website. This is not an export of the original developer repository. JSX components and data were reconstructed from the publicly served frontend; the layout, content and animations are preserved.

## Requirements

Node.js 22.9 or newer (Node.js 24 LTS recommended), npm and VS Code.

## Run locally

Extract the ZIP, open this folder in VS Code and run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

## Production

```bash
npm run build
npm start
```

`npm start` serves the production build at http://localhost:3000.

## Edit the website

- `src/app/`: Next.js page routes, layout and global CSS.
- `src/views/`: editable JSX for the five complete pages.
- `src/components/`: shared navbar, footer, animation helpers and molecule canvas.
- `src/data/content.js`: text, contact details, services, categories and image references.
- `public/`: logo and locally downloaded images.

Tailwind CSS is configured in `tailwind.config.cjs`. Add or change utility classes directly in the JSX; styles regenerate automatically. Custom grid and global styles are in `src/app/globals.css`.

The enquiry form validates required fields and shows a preview-only notice. It does not send or store enquiries. Add your own API/email integration before using it for real enquiries. Some photos and fonts load from external providers, so internet access is needed for a fully matching appearance. Company claims are copied from the reference and have not been independently verified.

No credentials, backend, database, original repository history, or node_modules are included.
