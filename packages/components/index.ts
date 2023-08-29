import { type App, Component } from 'vue';
import './index.css';

const modulesFiles = import.meta.glob('./**/index.ts', { import: 'default', eager: true });

export * from './button';
export * from './icon';
export * from './message'

export default {
	install(app: App) {
		for (const path in modulesFiles) {
			const mode: Component = modulesFiles[path];
			app.component(mode.name, mode);
		}
	},
};
