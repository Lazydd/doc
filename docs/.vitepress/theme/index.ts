import DefaultTheme from "vitepress/theme";
import Demo from "../src/demo/index.vue";

import "prismjs/themes/prism-funky.min.css";
import "../style/main.css";
import "../style/vars.css";

export default {
    ...DefaultTheme,
    enhanceApp: ({ app }) => {
        app.component("Demo", Demo);
    },
};
