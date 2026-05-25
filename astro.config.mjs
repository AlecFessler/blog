// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://alecfessler.com',
  integrations: [mdx(), sitemap()],

  markdown: {
      shikiConfig: {
          theme: 'github-dark',
          langs: [
              'zig',
              'hlsl',
              'glsl',
              'wgsl',
              'cpp',
              'rust',
              'python',
              'bash',
              'json',
              'typescript',
              'javascript',
          ],
          wrap: false,
      },
	},

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  adapter: cloudflare(),
});