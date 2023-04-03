const URL = 'https://komikidc.site'
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true, // (optional)
  // ...other options
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [`${URL}/server-sitemap.xml`]
  }
}