import { headerPlugin } from './plugin/headerMdPlugin';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock-fork';
import { RssPlugin, RSSOptions } from 'vitepress-plugin-rss';
import algoliaSearchOptions from './search/algolia';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { en, root, enSearch, zhSearch, zhDemoBlock, enDemoBlock } from './languages';

const RSS: RSSOptions = {
	title: 'docs',
	baseUrl: 'https://lazydd.github.io',
	description: '博客模板',
	language: 'zh-cn',
	copyright: 'Copyright © 2023-present ddlazy',
};

export default {
	title: 'ddlazy-ui-plus',
	head: [
		[
			'script',
			{
				src: 'https://at.alicdn.com/t/font_3116237_st7bhqgkyyc.js',
			},
		],
	],
	outDir: '../dist/docs',
	srcDir: 'src',
	base: '/docs/',
	description: '博客模板',
	lastUpdated: true,
	cleanUrls: true,
	ignoreDeadLinks: true,
	sitemap: {
		hostname: 'https://ddlazy.cn',
		transformItems(items) {
			return items.filter((item) => !item.url.includes('migration'));
		},
	},
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
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	},
	vite: {
		plugins: [demoblockVitePlugin(), RssPlugin(RSS), vueJsx()],
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
			// provider: 'algolia',
			// options: algoliaSearchOptions,
		},
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

const customElements = [
	'mjx-container',
	'mjx-assistive-mml',
	'math',
	'maction',
	'maligngroup',
	'malignmark',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mi',
	'mlongdiv',
	'mmultiscripts',
	'mn',
	'mo',
	'mover',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'ms',
	'mscarries',
	'mscarry',
	'mscarries',
	'msgroup',
	'mstack',
	'mlongdiv',
	'msline',
	'mstack',
	'mspace',
	'msqrt',
	'msrow',
	'mstack',
	'mstack',
	'mstyle',
	'msub',
	'msup',
	'msubsup',
	'mtable',
	'mtd',
	'mtext',
	'mtr',
	'munder',
	'munderover',
	'semantics',
	'math',
	'mi',
	'mn',
	'mo',
	'ms',
	'mspace',
	'mtext',
	'menclose',
	'merror',
	'mfenced',
	'mfrac',
	'mpadded',
	'mphantom',
	'mroot',
	'mrow',
	'msqrt',
	'mstyle',
	'mmultiscripts',
	'mover',
	'mprescripts',
	'msub',
	'msubsup',
	'msup',
	'munder',
	'munderover',
	'none',
	'maligngroup',
	'malignmark',
	'mtable',
	'mtd',
	'mtr',
	'mlongdiv',
	'mscarries',
	'mscarry',
	'msgroup',
	'msline',
	'msrow',
	'mstack',
	'maction',
	'semantics',
	'annotation',
	'annotation-xml',
];
