import { App } from 'vue';

const install = (component) => {
	component.install = (app: App) => {
		app.component(component.name, component);
	};
	return component;
};

export { install };
