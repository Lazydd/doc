import { headerPlugin } from './plugin/headerMdPlugin';
import { MarkdownTransform } from './plugin/markdownTransform';
import { ChangeLog } from './plugin/changelog';
import { getChangeLog } from '../../scripts/changelog';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock-fork';
import { createRssFile } from './plugin/rss';
import algoliaSearchOptions from './search/algolia';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import { en, root, enSearch, zhSearch, zhDemoBlock, enDemoBlock } from './languages';
import { siteName, githubRepoLink, githubLink } from './meta';
import type { SiteConfig } from 'vitepress';

const [changeLog] = await Promise.all([getChangeLog(800)]);

export default {
	title: siteName,
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
		image: {
			lazyLoading: true,
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
		plugins: [
			demoblockVitePlugin(),
			vueJsx(),
			MarkdownTransform(),
			ChangeLog(changeLog),
			UnoCSS(),
		],
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
	buildEnd: (config: SiteConfig) => {
		createRssFile(config);
	},
	themeConfig: {
		i18nRouting: true,
		logo: '/logo.svg',
		socialLinks: [{ icon: 'github', link: githubRepoLink }],
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
