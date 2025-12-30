import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://eefunction-doc.pages.dev',
	base: '/',
	server: {
		host: true,
		port: 4321,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 1000,
			},
		},
	},
	integrations: [
		starlight({
			title: 'eeFunction Docs',
			customCss: [
				// Path to your custom CSS file
				'./src/styles/table.css',
			],
		logo: {
			// src: './src/assets/favicon_taeg_yellow.svg',
			src: './src/assets/icon_eefunction.png',		},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ko: {
					label: '한국어',
					lang: 'ko',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'Issues',
					href: 'https://github.com/theangkko/eefunction-doc/issues'
				}
			],
			sidebar: [
				// { label: 'Home', link: '/' },
				{
					label: 'User Guide',
					translations: { ko: '사용자 가이드' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', link: '/user-guide/getting-started/', translations: { ko: '시작하기' } },
						{ label: 'Installation', link: '/user-guide/installation/', translations: { ko: '설치' } },
						{ label: 'Developer Blog', link: '/user-guide/developer-blog/', translations: { ko: '개발자 블로그' } },
						{ label: 'Privacy Policy', link: '/user-guide/privacy-policy/', translations: { ko: '개인정보 처리방침' } },
					],
				},
				{
					label: 'Functions',
					translations: { ko: '함수' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'General Function', link: '/function/general-function/', translations: { ko: '일반 함수' } },
						{ label: 'Engineering Function', link: '/function/engineering-function/', translations: { ko: '공학 함수' } },
					],
				},
				{
					label: 'Reference',
					translations: { ko: '참고자료' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
