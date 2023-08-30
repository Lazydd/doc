import { headerPlugin } from './plugin/headerMdPlugin';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock-fork';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { en, root, enSearch, zhSearch, zhDemoBlock, enDemoBlock } from './languages';

export default {
	title: 'ddlazy-ui',
	head: [
		[
			'script',
			{
				src: 'https://at.alicdn.com/t/font_3116237_st7bhqgkyyc.js',
			},
		],
		[
			'link',
			{
				href: 'https://cdn.ddlazy.cn/map/main.css',
				rel: 'stylesheet',
			},
		],
	],
	outDir: '../dist',
	srcDir: 'src',
	// base: process.env.NODE_ENV === "production" ? "/ddlazy-ui/" : "/",
	cleanUrls: true,
	markdown: {
		// lineNumbers: true,//行号
		config(md) {
			md.use(headerPlugin);
			md.use(demoblockPlugin, {
				customClass: 'demoblock-custom',
			});
		},
	},
	vue: {
		template: {
			ssr: true,
			// compilerOptions: {
			// 	isCustomElement: (tag) => tag.startsWith('dd-'),
			// },
		},
	},
	vite: {
		plugins: [demoblockVitePlugin(), vueJsx()],
		resolve: {
			alias: {
				'@': process.cwd(),
			},
		},
		server: {
			host: true,
		},
		build: {
			minify: 'terser',
			chunkSizeWarningLimit: Infinity,
		},
		json: {
			stringify: true,
		},
	},
	locales: {
		...root,
		...en,
	},
	themeConfig: {
		// smoothScroll: true,
		i18nRouting: true,
		logo: '/logo.svg',
		socialLinks: [{ icon: 'github', link: 'https://github.com/Lazydd' }],
		search: {
			provider: 'local',
			options: {
				locales: {
					...enSearch,
					...zhSearch,
				},
			},
		},
		// algolia: {
		// 	indexName: 'ddlazy-ui-plus',
		// 	appId: '',
		// 	apiKey: '',
		// },
		demoblock: {
			...zhDemoBlock,
			...enDemoBlock,
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present ddlazy',
		},
	},
};
