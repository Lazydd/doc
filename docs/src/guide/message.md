# Message 消息提示

## 基础用法

:::demo

```vue
<template>
	<div>
		<ddButton @click="open1">success</ddButton>
		<ddButton @click="open2">warning</ddButton>
		<ddButton @click="open3">error</ddButton>
		<ddButton @click="open4">info</ddButton>
	</div>
</template>

<script setup lang="ts">
import message from '../../.vitepress/src/message/message.ts';
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
