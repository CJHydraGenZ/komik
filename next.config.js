/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   // customKey: "my-value",
  //   NEXT_PUBLIC_RAPIDAPI_KEY:
  //     "2c852202f9msha06be18b51b4ec6p1ea7d3jsne1c7731ebef2",
  //   NEXT_PUBLIC_HOST: "webtoon.p.rapidapi.com",
  // },
  images: {
    domains: [
      "img.statically.io",
      "i3.wp.com",
      "komikcast.site",
      "cdn.komikcast.com",
      "cdn.komikcast.site",
      "thumbnail.komiku.id",
      "cdn.komiku.co.id",
      "cdn.statically.io",
      "ik.imagekit.io"
    ],
  },
};

module.exports = nextConfig;
