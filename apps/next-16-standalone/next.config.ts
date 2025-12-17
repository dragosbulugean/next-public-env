import { type NextConfig } from 'next';

const config: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  telemetry: false,
};

export default config;
