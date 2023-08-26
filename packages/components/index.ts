import { type App, Component } from 'vue';
import { camelize } from '../utils/index';
import './index.css';
const modulesFiles = import.meta.glob('./dd-*/index.ts', { import: 'default', eager: true });

// export * from './dd-button';
// export * from './dd-icon';

export default {
	install(app: App) {
		for (const path in modulesFiles) {
			const mode: Component = modulesFiles[path];
			app.component(mode.name, mode);
			app.component(camelize(`-${mode.name}`), mode);
		}
	},
};

// export const modules = Object.keys(modulesFiles).reduce((modules, mode) => {
// 	const moduleContent = modulesFiles[mode];
// 	return { ...modules, [moduleContent.name]: moduleContent.install };
// }, {});
