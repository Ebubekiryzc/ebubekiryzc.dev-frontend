/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1', ],
    },
    experimental: {
        appDir: true
    }
}

module.exports = nextConfig