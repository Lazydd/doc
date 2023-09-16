import type { DefaultTheme } from 'vitepress';

export const config = {
	root: {
		label: '简体中文',
		lang: 'Zh_CN',
		description: '一个基于Vue的组件库',
		themeConfig: {
			nav: [
				{
					text: '🍉😉组件',
					link: '/guide/installation',
					// activeMatch: '^/guide/',
				},
			],
			sidebar: getGuide(),
			editLink: {
				pattern: 'https://github.com/Lazydd/doc/edit/main/docs/src/:path',
				text: '在GitHub上编辑',
			},
			lastUpdated: {
				text: '上次更新',
			},
			outline: {
				label: '本页目录',
				level: 'deep',
			},
			docFooter: {
				prev: '上一页',
				next: '下一页',
			},
		},
	},
};

export const search = {
	root: {
		translations: {
			button: {
				buttonText: '搜索',
				buttonAriaLabel: '搜索',
			},
			modal: {
				resetButtonTitle: '重置搜索',
				backButtonTitle: '关闭搜索',
				noResultsText: '无法找到相关结果',
				footer: {
					selectText: '选择',
					selectKeyAriaLabel: 'enter',
					navigateText: '切换',
					navigateUpKeyAriaLabel: 'up arrow',
					navigateDownKeyAriaLabel: 'down arrow',
					closeText: '关闭',
					closeKeyAriaLabel: 'escape',
				},
			},
		},
	},
};

export const demoblock = {
	root: {
		'view-source': '查看源代码',
		'hide-source': '隐藏源代码',
		'edit-in-editor': '在 Playground 中编辑',
		'edit-on-github': '在 Github 中编辑',
		'copy-code': '复制代码',
		'copy-success': '复制成功',
		'copy-error': '复制失败',
	},
};

function getGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Guide',
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
					text: 'Icon 图标',
					link: '/basic/icon',
				},
				{
					text: 'Button 按钮',
					link: '/basic/button',
				},
			],
		},
		{
			text: 'Notice',
			items: [
				{
					text: 'Message 消息提示',
					link: '/notice/message',
				},
			],
		},
	];
}
