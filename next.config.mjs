import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    typedRoutes: true,
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default withContentlayer(nextConfig);
