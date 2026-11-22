# Freelancer portfolio site (React + Vite)

A one-page portfolio site for a freelancer, built with React 18 and Vite.

## Run it

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev      # starts a local dev server (usually http://localhost:5173)
npm run build    # creates the production site in /dist
npm run preview  # previews the production build locally
```

## Make it yours

- **Text and content:** edit `src/data.js`. Every [bracketed] placeholder (name, prices, projects, testimonial, stats) lives there.
- **Colours:** edit the variables at the top of `src/styles.css`. `--accent` controls buttons, links and highlights.
- **Contact form:** it only shows a confirmation for now. In `src/components/Contact.jsx`, `handleSubmit` has a comment showing where to post to a service such as Formspree or Web3Forms.

## Project structure

```
index.html
src/
  main.jsx          app entry
  App.jsx           page layout (the sections in order)
  data.js           all site content
  styles.css        all styling
  components/
    Header, Hero, Stats, Services, Process,
    Testimonial, Pricing, About, Contact, Footer
```

## Deploy

Run `npm run build`, then upload the `dist` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
