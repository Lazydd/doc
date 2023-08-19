import type { App, Component } from "vue";
const camelizeRE = /-(\w)/g;
const camelize = (str: string): string =>
    str.replace(camelizeRE, (_, c) => c.toUpperCase());

const install = <T extends Component>(component: T) => {
    (component as Record<string, unknown>).install = (app: App) => {
        const { name } = component;
        if (name) {
            app.component(name, component);
            app.component(camelize(`-${name}`), component);
        }
    };
    return component;
};

export { install };
