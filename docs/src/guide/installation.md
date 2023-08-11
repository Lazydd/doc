<script setup>
import ddButton from '../components/dd-button.vue';
</script>

# 安装

## npm、pnpm、yarn

::: code-group

```sh [npm]
> npm i ddlazy-ui -S
```

```sh [pnpm]
> pnpm i ddlazy-ui -S
```

```sh [yarn]
> yarn add ddlazy-ui
```

:::

## CDN

```html
<!-- 引入样式 -->
<link
    rel="stylesheet"
    href="https://cdn.ddlazy.cn/ddlazy-ui/lib/theme-chalk/index.css"
/>
<!-- 引入组件库 -->
<script src="https://cdn.ddlazy.cn/ddlazy-ui/lib/index.js" />
```

## JS 运行可编辑代码

:::demo dd-button
<ddButton @click="abc" >11</ddButton>
<ddButton round type='primary'>22</ddButton>
<ddButton type="primary" disabled circle>33</ddButton>
<ddButton loading type="primary" color='#fff'>33</ddButton>

<script>
  const abc=()=>{
    console.log('aaa')
  }
</script>

:::

<!-- 指定端口启动

```json{2}
  "scripts": {
    "docs:preview": "vitepress preview docs --port 8080" // [!code focus]
  }
``` -->
