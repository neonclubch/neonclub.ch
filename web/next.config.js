const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
