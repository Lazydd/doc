import type { DefaultTheme } from 'vitepress';

export const config = {
	en: {
		label: 'English',
		lang: 'en',
		link: '/en/',
		description: 'A Component Library for Vue.js.',
		lastUpdatedText: 'lastUpdated',
		themeConfig: {
			nav: [
				{
					text: '🍉😉Component',
					link: '/en/guide/installation',
					// activeMatch: '^/en/guide/',
				},
			],
			sidebar: {
				'/en/': getGuide(),
			},
			outline: {
				label: 'On this page',
				level: 'deep',
			},
			docFooter: {
				prev: 'Previous page',
				next: 'Next page',
			},
		},
	},
};

export const search = {
	en: {
		translations: {
			button: {
				buttonText: 'Search',
				buttonAriaLabel: 'Search',
			},
			modal: {
				resetButtonTitle: 'Reset search',
				backButtonTitle: 'Close search',
				noResultsText: 'No results for',
				footer: {
					selectText: 'to select',
					selectKeyAriaLabel: 'enter',
					navigateText: 'to navigate',
					navigateUpKeyAriaLabel: 'up arrow',
					navigateDownKeyAriaLabel: 'down arrow',
					closeText: 'to close',
					closeKeyAriaLabel: 'escape',
				},
			},
		},
	},
};

export const demoblock = {
	en: {
		'view-source': 'View source',
		'hide-source': 'Hide source',
		'edit-in-editor': 'Edit in Playground',
		'edit-on-github': 'Edit on GitHub',
		'copy-code': 'Copy code',
		'copy-success': 'Copy success',
		'copy-error': 'Copy error',
	},
};

function getGuide(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Guide',
			// collapsed: false,
			items: [
				{
					text: 'Install',
					link: '/en/guide/installation',
				},
				{
					text: 'Quickstart',
					link: '/en/guide/quickstart',
				},
				{
					text: 'Transition',
					link: '/en/guide/transition',
				},
			],
		},
		{
			text: 'Basic',
			items: [
				{
					text: 'Icon',
					link: '/en/basic/icon',
				},
				{
					text: 'Button',
					link: '/en/basic/button',
				},
			],
		},
		{
			text: 'Notice',
			items: [
				{
					text: 'Message',
					link: '/en/notice/message',
				},
			],
		},
	];
}
