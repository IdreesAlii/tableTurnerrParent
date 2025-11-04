import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import InitialLoader from '@/components/ui/initial-loader'
import ThemeProvider from '@/components/theme-provider'
import ThemeSwitch from '@/components/ui/theme-switch'

export const metadata: Metadata = {
  metadataBase: new URL('https://tableturnerr.com'),

  title: {
    default: 'Tableturnerr — Get Your Restaurant Qualified & Ready to Scale',
    template: '%s | Tableturnerr'
  },

  description:
    'Tableturnerr helps independent restaurants build websites, branding, and digital presence to qualify for top-tier platforms like Owner.com. Get ready, get qualified, and finally scale your restaurant with modern tools and waived setup fees.',

  keywords: [
    'restaurant website design',
    'restaurant branding',
    'restaurant marketing',
    'owner.com partner',
    'restaurant SEO',
    'small restaurant growth',
    'direct orders restaurant',
    'zero commission delivery',
    'restaurant digital presence',
    'independent restaurant tools',
    'restaurant menu design',
    'restaurant google ranking',
  ],

  authors: [{ name: 'Tableturnerr' }],
  creator: 'Tableturnerr',
  publisher: 'Tableturnerr',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://tableturnerr.com',
    languages: {
      'en-US': 'https://tableturnerr.com',
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tableturnerr.com',
    siteName: 'Tableturnerr',
    title: 'Tableturnerr — Build. Qualify. Scale Your Restaurant.',
    description:
      'We help smaller independent restaurants build their website, brand, and digital presence — then connect them to Owner.com with waived setup fees. Start qualifying today.',
    images: [
      {
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ekZ2T0AAAAASUVORK5CYII=',
        width: 1,
        height: 1,
        alt: ' ',
      },
    ],
  },

  manifest: '/manifest.json',

  category: 'business',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
  <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Tableturnerr',
              url: 'https://tableturnerr.com',
              image: 'https://tableturnerr.com/og-image.jpg',
              description:
                'Tableturnerr helps restaurants qualify for Owner.com by building websites, branding, menus, SEO, and digital presence — then waives the Owner.com setup fee.',
              areaServed: 'Worldwide',
              sameAs: [
                'https://tableturnerr.com',
                'https://www.instagram.com/tableturnerr/',
                'https://www.linkedin.com/company/tableturnerr',
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Tableturnerr',
              url: 'https://tableturnerr.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://tableturnerr.com/?s={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased">
        <ThemeProvider>
          <InitialLoader showOnce={false}>{children}</InitialLoader>
          <Toaster />

          {/* Persistent theme switch fixed bottom-left */}
          <div className="fixed left-4 bottom-4 z-50">
            <ThemeSwitch />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
