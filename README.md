# Tableturnerr Landing Page

This is a [Next.js](https://nextjs.org/) project for the Tableturnerr landing page, built using Firebase Studio.

## Overview

Tableturnerr helps restaurants build their brand and online presence to qualify for platforms like Owner.com. This landing page showcases our services, design work, and partnership with Owner.com.

## Tech Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Deployment**: Firebase App Hosting

## Getting Started

The main entry point of the application is `src/app/page.tsx`.

To run the development server:

```bash
npm run dev
```

## Using Your Own Images

To use your own images on the site, follow these steps:

1.  Create a `public` folder in the root directory of your project if it doesn't already exist.
2.  Place your image files (e.g., `logo.png`, `hero-image.jpg`) inside the `public` folder.
3.  In your components, you can reference these images by starting the path with a `/`.

For example, an image at `public/logo.png` can be used in a component like this:

```jsx
import Image from 'next/image';

<Image src="/logo.png" alt="My Logo" width={100} height={50} />
```
