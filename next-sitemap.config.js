/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mihany.github.io/template-H', // Replace with your site's base URL
    generateRobotsTxt: true, // Generate a robots.txt file alongside sitemap
    changefreq: 'daily', // Default frequency for sitemap entries
    priority: 0.7, // Default priority for sitemap entries
    sitemapSize: 5000, // Limit the number of URLs per sitemap file
    exclude: ['/404', '/private'], // Pages to exclude from the sitemap
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/private'],
        },
      ],
    },
  };