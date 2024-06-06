/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
};

module.exports = (
    nextConfig
);
