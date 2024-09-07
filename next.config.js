/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio',
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains: ['randomuser.me'],
    },
}

module.exports = nextConfig
