<template>
    <i class="dd-icon" @click="$emit('click')">
        <svg
            class="icon"
            aria-hidden="true"
            :style="{ fill: color }"
            width="1em"
            height="1em"
        >
            <use :xlink:href="`#${icon}`" />
        </svg>
    </i>
</template>

<script setup lang="ts">
defineOptions({
    name: "ddIcon",
});
const props = defineProps<{
    icon: string;
    color?: string;
}>();
</script>

<style lang="less" scoped>
.dd-icon {
    color: inherit;
    height: 1em;
    width: 1em;
    line-height: 1em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    fill: currentColor;
    svg {
        display: inline-flex;
    }
}
</style>
