# Message 消息提示

## 基础用法

:::demo

```vue
<template>
	<div>
		<dd-button @click="open1">success</dd-button>
		<dd-button @click="open2">warning</dd-button>
		<dd-button @click="open3">error</dd-button>
		<dd-button @click="open4">info</dd-button>
	</div>
</template>

<script setup lang="ts">
import message from '../../.vitepress/src/message/index.ts';
const open1 = () => {
	message.success('success');
};
const open2 = () => {
	message('warning', { type: 'warning' });
};
const open3 = () => {
	message.error('error');
};
const open4 = () => {
	message('info');
};
</script>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```
