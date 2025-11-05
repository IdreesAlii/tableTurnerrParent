import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // When exporting static HTML, enable trailingSlash so routes are emitted as
  // directories with index.html which some static hosts prefer.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Disable Next's image optimization for static export; this makes images
    // render as plain <img> tags and avoids runtime optimization that requires
    // a server. Also keep remotePatterns for allowed remote image hosts.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
        pathname: '/**',
      }
      ,
      {
        protocol: 'https',
        hostname: 'xubohuah.github.io',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
