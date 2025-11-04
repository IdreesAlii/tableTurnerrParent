import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import InitialLoader from '@/components/ui/initial-loader';

export const metadata: Metadata = {
  title: 'Tableturnerr Landing',
  description: 'We Turn Tables, You Keep The Profit.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <InitialLoader showOnce={false}>
          {children}
        </InitialLoader>
        <Toaster />
      </body>
    </html>
  );
}
