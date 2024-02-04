import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://theangkko.github.io',
	base: '/eefunction-doc',
	integrations: [
		starlight({
			title: 'eeFunction Docs',
      logo: {
        // src: './src/assets/favicon_taeg_yellow.svg',
        src: './src/assets/icon_eefunction.png',
      },
			social: {
				email: 'https://theangkko.github.io',
			},
			sidebar: [
				// { label: 'Home', link: '/' },
				{
					label: 'User Guide',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/user-guide/getting-started/' },
						{ label: 'Installation', link: '/user-guide/installation/' },
					],
				},
				{
					label: 'Functions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'General', link: '/functions/general/' },
						{ label: 'Engineering', link: '/functions/engineering/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
