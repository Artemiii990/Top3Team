# iPhone 17 Pro — Anatomy Site

A single-page Next.js 15 / React 19 site featuring a scroll-scrubbed hero film and editorial feature panels.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  layout.tsx         # root layout, metadata, fonts
  page.tsx           # composes all sections
  globals.css        # design tokens + base resets
components/
  Nav.tsx            # fixed top nav
  Hero.tsx           # headline + price + CTAs
  FilmSection.tsx    # sticky scroll-scrubbed video + 4 feature panels (client)
  Specs.tsx          # editorial spec table
  Buy.tsx            # pricing block
  Footer.tsx         # footer links
public/
  media/
    hero-loop.mp4    # 9.4 MB, all-keyframe H.264, instant seek
    hero-poster.jpg  # poster (first frame)
```

## How the scroll-scrub works

- The hero `<video>` is `muted playsinline preload="auto"` — never autoplays.
- A scroll listener (throttled by `requestAnimationFrame`) maps scroll progress through the film section to `video.currentTime`.
- The MP4 is encoded with every frame as a keyframe (`-g 1`) so seeks are O(1).
- On screens narrower than 900px the sticky pin is dropped, video and features stack normally.
- `prefers-reduced-motion` swaps the `<video>` for the static poster.
