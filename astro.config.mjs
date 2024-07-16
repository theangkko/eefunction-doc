import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://eefunction-doc.pages.dev',
	base: '/',
	integrations: [
		starlight({
			title: 'eeFunction Docs',
		logo: {
			// src: './src/assets/favicon_taeg_yellow.svg',
			src: './src/assets/icon_eefunction.png',
		},
			social: {
				email: 'https://eefunction-doc.pages.dev',
			},
			sidebar: [
				// { label: 'Home', link: '/' },
				{
					label: 'User Guide',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/user-guide/getting-started/' },
						{ label: 'Installation', link: '/user-guide/installation/' },
						{ label: 'Privacy Policy', link: '/user-guide/privacy-policy/' },
					],
				},
				{
					label: 'Functions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'General Function', link: '/function/general-function/' },
						{ label: 'Engineering Function', link: '/function/engineering-function/' },
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
