# Message

## Basic usage

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
import { ddMessage } from '@/lib/ddlazy-ui-plus.es.js';
const open1 = () => {
	ddMessage.success('success');
};
const open2 = () => {
	ddMessage('warning', { type: 'warning' });
};
const open3 = () => {
	ddMessage.error('error');
};
const open4 = () => {
	ddMessage('info');
};
</script>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```
