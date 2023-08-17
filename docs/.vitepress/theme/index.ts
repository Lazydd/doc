import DefaultTheme from "vitepress/theme";
// import Demo from "../src/demo/index.vue";
import Demo from "vitepress-theme-demoblock-fork/dist/client/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock-fork/dist/client/components/DemoBlock.vue";
import 'vitepress-theme-demoblock-fork/dist/theme/styles/index.css'

import "../style/main.css";
import "../style/vars.css";
import ddButton from "../../src/components/dd-button.vue";
import ddIcon from "../../src/components/dd-icon.vue";
export default {
    ...DefaultTheme,
    enhanceApp: ({ app }) => {
        app.component("Demo", Demo);
        app.component("DemoBlock", DemoBlock);
        app.component("ddButton", ddButton);
        app.component("ddIcon", ddIcon);
    },
};
