import DefaultTheme from 'vitepress/theme';

import Demo from 'vitepress-theme-demoblock-fork/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock-fork/dist/client/components/DemoBlock.vue';
import 'vitepress-theme-demoblock-fork/dist/theme/styles/index.css';

import ZoomImg from '../components/ZoomImg.vue';
import BlogApp from '../components/BlogApp.vue';
import Changelog from '../components/Changelog.vue';
import Contributors from '../components/Contributors.vue';

import '../style/main.css';
import '../style/vars.css';
import '../style/scroll.css';
import '../style/inline-demo.css';
import 'uno.css';

// import { ddButton, ddIcon } from '@/lib/ddlazy-ui-plus.es';
import ddlazyUi from '@/lib/ddlazy-ui-plus.es.js';
import '@/lib/index.css';
import IconList from '../../src/basic/icon/icon.vue';
export default {
	...DefaultTheme,
	Layout: BlogApp,
	enhanceApp: (ctx) => {
		const { app } = ctx;
		DefaultTheme.enhanceApp(ctx);
		app.component('Demo', Demo);
		app.component('IconList', IconList);
		app.component('DemoBlock', DemoBlock);
		app.component('Image', ZoomImg);
		app.component('Changelog', Changelog);
		app.component('Contributors', Contributors);
		// app.use(ddButton);
		// app.use(ddIcon);
		app.use(ddlazyUi);
	},
};
