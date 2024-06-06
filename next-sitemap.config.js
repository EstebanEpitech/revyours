// Import computer parts

module.exports = {
    siteUrl: process.env.NEXT_WEBSITE_URL,
    generateRobotsTxt: true,
    outDir: './public',
    fileName: 'sitemap.xml', // Spécifiez le nom de fichier souhaité
    sitemapSize: 50000,
};