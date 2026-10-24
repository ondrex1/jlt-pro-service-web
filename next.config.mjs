/** @type {import('next').NextConfig} */
const nextConfig = {
  // statický export – výsledek ve složce /out lze nahrát na jakýkoli hosting
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
