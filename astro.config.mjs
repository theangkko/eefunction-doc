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
				'./src/styles/table.css',
			],
			logo: {
				src: './src/assets/icon_eefunction.png',
			},
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
					href: 'https://github.com/theangkko/eefunction-doc/issues',
				},
			],
			sidebar: [
				{
					label: 'User Guide',
					translations: { ko: '사용자 가이드' },
					items: [
						{ label: 'Getting Started', link: '/user-guide/getting-started/', translations: { ko: '시작하기' } },
						{ label: 'Installation', link: '/user-guide/installation/', translations: { ko: '설치' } },
						{ label: 'Manual Installation', link: '/user-guide/installation_local/', translations: { ko: '수동 설치' } },
						{ label: 'Developer Blog', link: '/user-guide/developer-blog/', translations: { ko: '개발자 블로그' } },
						{ label: 'Support', link: '/user-guide/support-system/', translations: { ko: '지원 안내' } },
						{ label: 'Privacy Policy', link: '/user-guide/privacy-policy/', translations: { ko: '개인정보 처리방침' } },
					],
				},
				{
					label: 'Functions',
					translations: { ko: '함수' },
					items: [
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
