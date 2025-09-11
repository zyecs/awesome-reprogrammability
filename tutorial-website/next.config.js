/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/awesome-reprogrammability/tutorial-website',
  assetPrefix: '/awesome-reprogrammability/tutorial-website',
  images: {
    unoptimized: true
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-math')],
    rehypePlugins: [require('rehype-katex')],
  },
})

module.exports = withMDX(nextConfig)