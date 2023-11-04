const { sources } = require("next/dist/compiled/webpack/webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/:path*`,
    },
  ],
};

module.exports = nextConfig;
