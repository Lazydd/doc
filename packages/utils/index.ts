const install = (component) => {
    component.install = (app) => {
        app.component(component.name, component);
    };
    return component;
};

export { install };
