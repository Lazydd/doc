<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useClipboard, useToggle } from "@vueuse/core";
import IconCopy from "./icon-copy.vue";
import IconCode from "./icon-code.vue";
import IconTop from "./icon-top.vue";
import IconSuccess from "./icon-success.vue";
import Transfer from "../transfer/index.vue";
import Tooltip from "../tooltip/index.vue";
import SourceCode from "./source-code.vue";

const [sourceVisible, toggleSourceVisible] = useToggle();

const props = defineProps<{
    source: string;
    rawSource: string;
}>();

const { copy } = useClipboard({
    source: decodeURIComponent(props.rawSource),
    read: false,
});

const copySuccess = ref(false);

const copyCode = async () => {
    if (copySuccess.value) return;
    try {
        await copy();
        copySuccess.value = true;
    } catch (e: any) {}
};
let time;
const mouseleave = () => {
    time = setTimeout(() => {
        copySuccess.value = false;
    }, 300);
};

onMounted(() => {
    if (time) clearTimeout(time);
});
</script>

<template>
    <ClientOnly>
        <div class="example">
            <div class="example-showcase">
                <slot />
            </div>
            <div class="op-btns">
                <Tooltip content="复制代码" placement="top">
                    <IconCopy v-show="!copySuccess" @click="copyCode" />
                </Tooltip>
                <IconSuccess v-show="copySuccess" @mouseleave="mouseleave" />
                <Tooltip content="查看源代码" placement="top">
                    <IconCode @click="toggleSourceVisible()" />
                </Tooltip>
            </div>
            <Transfer>
                <SourceCode v-show="sourceVisible" :source="source" />
            </Transfer>
            <Transition name="dd-fade">
                <div
                    v-show="sourceVisible"
                    class="example-float-control"
                    @click="toggleSourceVisible(false)"
                >
                    <IconTop />
                    <span>隐藏源码</span>
                </div>
            </Transition>
        </div>
    </ClientOnly>
</template>

<style scoped lang="less">
.m-0 {
    margin: 0;
}
.example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
}
.example {
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;

    .op-btns {
        border-top: 1px solid var(--vp-c-divider);
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 2.5rem;

        i {
            margin: 0 0.5rem;
            cursor: pointer;
            color: var(--vp-c-text-2);
            transition: 0.2s;
            &:hover {
                color: var(--vp-button-brand-bg);
            }
        }
    }

    &-float-control {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid var(--vp-c-divider);
        height: 44px;
        box-sizing: border-box;
        background-color: var(--vp-c-bg, #fff);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -1px;
        color: var(--vp-button-brand-bg);
        cursor: pointer;
        position: sticky;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        span {
            font-size: 14px;
            margin-left: 10px;
        }

        &:hover {
            color: var(--vp-button-brand-border);
        }
    }
}
.dd-fade-enter-active,
.dd-fade-leave-active {
    transition: opacity 0.2s;
}
.dd-fade-enter,
.dd-fade-leave-to {
    opacity: 0;
}
.dd-fade-enter-to,
.dd-fade-leave {
    opacity: 1;
}
</style>
