import { headerPlugin } from "./headerMdPlugin";
import mdContainer from "markdown-it-container";
import escapeHtml from "escape-html";
import prism from "prismjs";
import path from "path";
import fs from "fs";

const wrap = (code: string, lang: string): string => {
    if (lang === "text") {
        code = escapeHtml(code);
    }
    return `<pre v-pre style="margin: 0;"><code>${code}</code></pre>`;
};

const highlight = (str: string, lang: string) => {
    if (!lang) {
        return wrap(str, "text");
    }
    lang = lang.toLowerCase();
    const rawLang = lang;
    if (lang === "vue" || lang === "html") {
        lang = "markup";
    }
    if (lang === "md") {
        lang = "markdown";
    }
    if (lang === "ts") {
        lang = "typescript";
    }
    if (lang === "py") {
        lang = "python";
    }
    if (prism.languages[lang]) {
        const code = prism.highlight(str, prism.languages[lang], lang);
        return wrap(code, rawLang);
    }
    return wrap(str, "text");
};

export default {
    title: "ddlazy-ui",
    description: "A Component Library for Vue.js.",
    outDir: "../dist",
    srcDir: "src",
    // base: process.env.NODE_ENV === "production" ? "/ddlazy-ui/" : "/",
    cleanUrls: true,
    markdown: {
        // lineNumbers: true,//行号
        config(md) {
            md.use(headerPlugin);
            md.use(mdContainer, "demo", {
                validate(params) {
                    return !!params.trim().match(/^demo\s*(.*)$/);
                },
                render: function (tokens, idx) {
                    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                    if (
                        tokens[idx].nesting === 1 /* means the tag is opening */
                    ) {
                        // 取出:::demo 后面的配置，即源码路径
                        const sourceFile = m && m.length > 1 ? m[1] : "";
                        const sourceFileToken = tokens[idx + 2];
                        // // 源码文件路径
                        const filePath = path.resolve(
                            process.cwd(),
                            "docs/src/components",
                            `${sourceFile}.vue`
                        );
                        let source = "";
                        if (sourceFileToken.type === "inline") {
                            source = fs.readFileSync(filePath, "utf-8");
                        }
                        if (!source)
                            throw new Error(
                                `Incorrect source file: ${sourceFile}`
                            );
                        return `<Demo source="${encodeURIComponent(
                            highlight(source, "vue")
                        )}" raw-source="${encodeURIComponent(source)}" >`;
                    } else {
                        return "</Demo>";
                    }
                },
            });
        },
    },
    vue: {
        template: {
            ssr: true,
            compilerOptions: {
                isCustomElement: (tag) => tag.startsWith("dd-"),
            },
        },
    },
    locales: {
        root: {
            label: "简体中文",
            lang: "Zh_CN",
        },
        en: {
            label: "English",
            lang: "en",
            link: "/en/",
        },
        fr: {
            label: "French",
            lang: "fr",
            link: "/fr/",
        },
    },
    themeConfig: {
        smoothScroll: true,
        outlineTitle: "本页目录",
        lastUpdatedText: "上次更新",
        logo: "/logo.svg",
        socialLinks: [{ icon: "github", link: "https://github.com/Lazydd" }],
        nav: [
            {
                text: "🍉😉组件",
                link: "/guide/installation",
                activeMatch: "^/guide/",
            },
        ],
        sidebar: {
            "/guide/": getGuide(),
        },
        search: {
            provider: "local",
        },
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2019-present ddlazy",
        },
    },
};

function getGuide() {
    return [
        {
            text: "指南",
            // collapsed: false,
            items: [
                {
                    text: "安装",
                    link: "/guide/installation",
                },
                {
                    text: "快速上手",
                    link: "/guide/quickstart",
                },
                {
                    text: "内置过渡动画",
                    link: "/guide/transition",
                },
            ],
        },
    ];
}
