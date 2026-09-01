# OtterWay — Intelligent Travel Prototype

Mobile-first proof of concept for the next OtterWay consumer travel experience. It extends the existing OtterWay interaction language rather than replacing it with a separate OTA shell.

## Demo story

Home → Ask Jojo → Trip Brief → Flight recommendation → Flight refinement → Flight selected → Hotel recommendation → Hotel selected → Trip overview → Itinerary → Collaboration moment → Jojo itinerary intervention → Updated itinerary → Trip readiness.

The primary screen-record path demonstrates recommendation over search, progressive disclosure, context preservation, explicit approval, and collaboration-aware agent behavior.

## Prototype behavior

- Deterministic mock data for a Jakarta → Tokyo family trip
- Jojo is contextual throughout the flow rather than a dedicated chat destination
- Flight and hotel decisions become native trip context
- Existing OtterWay-style itinerary patterns remain the planning surface
- Swipe left/right on mobile to move through the demo
- In-app CTAs support the intended story; on desktop, arrow controls are also available
- Consequential changes are proposed before they are applied

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. On desktop the prototype is presented in a 393px app frame; on mobile it fills the viewport and respects safe-area insets.

## Validate

```bash
npm run typecheck
npm run build
```

## Deploy to Vercel

This is a standard Next.js App Router project. Import the directory/repository into a new Vercel project, or from the project root run:

```bash
vercel
```

That creates a preview deployment. Do not promote it to production until the prototype is approved.

## Implementation notes

- Next.js + React + TypeScript
- `next/font` for Geist and Geist Mono
- `next/image` for travel photography
- Responsive CSS without a UI framework, using semantic tokens copied from the current OtterWay direction
- No authentication, payments, supplier APIs, or production AI orchestration by design
