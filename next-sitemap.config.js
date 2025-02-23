/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.hoetzin.com', // ✅ Dynamic URL for flexibility
  generateRobotsTxt: true, // ✅ Auto-generate robots.txt
  changefreq: 'daily', // ✅ Frequency for crawlers
  priority: 0.7, // ✅ Default priority for pages
  sitemapSize: 5000, // ✅ Limits URLs per sitemap file
  exclude: ['/404', '/private'], // ✅ Exclude these pages from sitemap
  trailingSlash: true, // ✅ Ensures URLs end with a slash (important for GitHub Pages)
  generateIndexSitemap: false, // ✅ Avoids generating extra index sitemap

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private'], // ✅ Consolidated allow/disallow rules
      },
    ],
  },
};