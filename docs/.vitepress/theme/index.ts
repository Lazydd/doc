import DefaultTheme from 'vitepress/theme';

import Demo from 'vitepress-theme-demoblock-fork/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock-fork/dist/client/components/DemoBlock.vue';
import 'vitepress-theme-demoblock-fork/dist/theme/styles/index.css';

import ZoomImg from '../components/ZoomImg.vue';
import BlogApp from '../components/BlogApp.vue'

import '../style/main.css';
import '../style/vars.css';
import '../style/scroll.css';
import '../style/inline-demo.css';

export default {
	...DefaultTheme,
	Layout: BlogApp,
	enhanceApp: (ctx) => {
		const { app } = ctx;
		DefaultTheme.enhanceApp(ctx);
		app.component('Demo', Demo);
		app.component('DemoBlock', DemoBlock);
		app.component('Image', ZoomImg);
	},
};
