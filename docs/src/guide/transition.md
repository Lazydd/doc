# 内置过渡动画

ddlazy-ui-plus 内应用在部分组件的过渡动画，你也可以直接使用。

## fade 淡入淡出

:::demo

```vue
<template>
	<div>
		<dd-button @click="show = !show">Click Me</dd-button>
		<div style="display: flex; margin-top: 20px; height: 100px">
			<transition name="dd-fade">
				<div v-show="show" class="transition-box">.dd-fade</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true);
</script>

<style lang="less" scoped>
.transition-box {
	margin-bottom: 10px;
	width: 200px;
	height: 100px;
	border-radius: 4px;
	background-color: #409eff;
	text-align: center;
	color: #fff;
	padding: 40px 20px;
	box-sizing: border-box;
	margin-right: 20px;
}
</style>
```

:::

## zoom 缩放

:::demo

```vue
<template>
	<div>
		<dd-button @click="show = !show">Click Me</dd-button>
		<div class="zoom">
			<transition name="dd-zoom-center">
				<div v-show="show" class="transition-box">.dd-zoom-center</div>
			</transition>
			<transition name="dd-zoom-left">
				<div v-show="show" class="transition-box">.dd-zoom-left</div>
			</transition>
			<transition name="dd-zoom-right">
				<div v-show="show" class="transition-box">.dd-zoom-right</div>
			</transition>
		</div>
		<div class="zoom">
			<transition name="dd-zoom-centerVertical">
				<div v-show="show" class="transition-box">.dd-zoom-centerVertical</div>
			</transition>
			<transition name="dd-zoom-top">
				<div v-show="show" class="transition-box">.dd-zoom-top</div>
			</transition>
			<transition name="dd-zoom-bottom">
				<div v-show="show" class="transition-box">.dd-zoom-bottom</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true);
</script>

<style lang="less" scoped>
.transition-box {
	margin-bottom: 10px;
	width: 200px;
	height: 100px;
	border-radius: 4px;
	background-color: #409eff;
	text-align: center;
	color: #fff;
	padding: 40px 20px;
	box-sizing: border-box;
	margin-right: 20px;
}
.zoom {
	display: flex;
	margin-top: 20px;
	height: 100px;
}
</style>
```

:::

## collapse 展开折叠

:::demo

```vue
<template>
	<div class="fold">
		<dd-button @click="show = !show">Click Me</dd-button>
		<div style="height: 320px; marginTop:20px">
			<dd-transition>
				<div v-show="show">
					<div class="transition-box">折叠</div>
					<div class="transition-box">折叠</div>
					<div class="transition-box">折叠</div>
				</div>
			</dd-transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true);
</script>

<style lang="less" scoped>
.transition-box {
	margin-bottom: 10px;
	width: 200px;
	height: 100px;
	border-radius: 4px;
	background-color: #409eff;
	text-align: center;
	color: #fff;
	padding: 40px 20px;
	box-sizing: border-box;
	margin-right: 20px;
}
</style>
```

:::
