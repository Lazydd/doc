<template>
	<i class="dd-icon">
		<svg xmlns="http://www.w3.org/2000/svg" :style="{ fill: color }">
			<use :xlink:href="`#icon-${icon}`" />
		</svg>
	</i>
</template>

<script setup lang="ts">
defineOptions({
	name: 'ddIcon',
});
const props = defineProps<{
	icon: string;
	color?: string;
}>();
</script>

<style lang="less" scoped>
.dd-icon {
	display: inline-flex;
	height: 1em;
	width: 1em;
	line-height: 1em;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: relative;
	fill: currentColor;
	font-size: inherit;
	svg {
		height: inherit;
		width: inherit;
	}
}
</style>
