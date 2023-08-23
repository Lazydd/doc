import { headerPlugin } from './plugin/headerMdPlugin';
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock-fork';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default {
	title: 'ddlazy-ui',
	description: 'A Component Library for Vue.js.',
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
			compilerOptions: {
				isCustomElement: (tag) => tag.startsWith('dd-'),
			},
		},
	},
	vite: {
		plugins: [demoblockVitePlugin(), vueJsx()],
	},
	locales: {
		root: {
			label: '简体中文',
			lang: 'Zh_CN',
		},
		en: {
			label: 'English',
			lang: 'en',
			link: '/en/',
		},
		fr: {
			label: 'French',
			lang: 'fr',
			link: '/fr/',
		},
	},
	themeConfig: {
		smoothScroll: true,
		outlineTitle: '本页目录',
		lastUpdatedText: '上次更新',
		logo: '/logo.svg',
		socialLinks: [{ icon: 'github', link: 'https://github.com/Lazydd' }],
		nav: [
			{
				text: '🍉😉组件',
				link: '/guide/installation',
				activeMatch: '^/guide/',
			},
		],
		sidebar: {
			'/guide/': getGuide(),
		},
		search: {
			provider: 'local',
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2019-present ddlazy',
		},
	},
};

function getGuide() {
	return [
		{
			text: '指南',
			// collapsed: false,
			items: [
				{
					text: '安装',
					link: '/guide/installation',
				},
				{
					text: '快速上手',
					link: '/guide/quickstart',
				},
				{
					text: '内置过渡动画',
					link: '/guide/transition',
				},
			],
		},
		{
			text: 'Basic',
			items: [
				{
					text: 'Layout 布局',
					link: '/guide/installation',
				},
				{
					text: 'Icon 图标',
					link: '/guide/quickstart',
				},
				{
					text: 'Button 按钮',
					link: '/guide/button',
				},
				{
					text: 'Link 文字链接',
					link: '/guide/transition',
				},
			],
		},
		{
			text: 'Notice',
			items: [
				{
					text: 'Message 消息提示',
					link: '/guide/message',
				},
			],
		},
	];
}
