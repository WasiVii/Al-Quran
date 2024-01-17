/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
// Avoid build and lint error in Docker or Vercel deployment
const isProduction = process.env.NODE_ENV === 'production' || process.env.IS_VERCEL_ENV === 'true'

// await import('./src/config.ts')

/** @type {import("next").NextConfig} */
const nextConfig = {
  // basePath: '/next',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  compiler: { removeConsole: isProduction },
  eslint: { ignoreDuringBuilds: isProduction },
  typescript: { ignoreBuildErrors: isProduction },
}

export default nextConfig
