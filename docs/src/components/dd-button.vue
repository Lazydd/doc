<template>
    <button
        :class="[
            'dd-button',
            type,
            size,
            { plain, round, circle, disabled, loading },
        ]"
        @click="$emit('click')"
    >
        <ddIcon v-if="loading" icon="icon-loading" class="loading" />
        <ddIcon v-if="icon" :icon="icon" />
        <span :class="{ ml5: icon || loading }" v-if="$slots.default">
            <slot />
        </span>
    </button>
</template>
<script setup lang="ts">
import ddIcon from "./dd-icon.vue";
defineOptions({
    name: "ddButton",
});
const props = withDefaults(
    defineProps<{
        type?: string;
        size?: string;
        circle?: boolean;
        disabled?: boolean;
        round?: boolean;
        plain?: boolean;
        loading?: boolean;
        icon?: string;
    }>(),
    {
        type: "",
        size: "default",
        circle: false,
        disabled: false,
        plain: false,
        loading: false,
    }
);
</script>

<style lang="less" scoped>
@keyframes loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.dd-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    user-select: none;

    &.round {
        border-radius: 20px;
    }
    &.circle {
        border-radius: 50%;
        padding: 8px;
    }
    .loading {
        animation: loading 2s linear infinite;
        pointer-events: none;
        cursor: inherit !important;
        color: inherit;
    }
    &:hover,
    &:focus {
        background: #ecf5ff;
        color: #409eff;
        border-color: #c6e2ff;
    }
    &.plain {
        color: #409eff;
        background: #fff;
        border-color: #b3d8ff;
        &:hover,
        &:focus {
            background: #fff;
            border-color: #409eff;
            color: #409eff;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #c0c4cc !important;
        background-color: #fff !important;
        border-color: #ebeef5 !important;
    }
    &.loading {
        background-color: #fff !important;
        border-color: #ebeef5 !important;
    }

    > span {
        display: flex;
        align-items: center;
    }
}
//type
.primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
    &.plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
        &:hover,
        &:focus {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #fff !important;
        background-color: #a0cfff !important;
        border-color: #a0cfff !important;
    }
    &.loading {
        background-color: #a0cfff !important;
        border-color: #a0cfff !important;
    }
}
.success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
    &.plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
        &:hover,
        &:focus {
            color: #fff;
            background-color: #67c23a;
            border-color: #67c23a;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #fff !important;
        background-color: #b3e19d !important;
        border-color: #b3e19d !important;
    }
    &.loading {
        background-color: #b3e19d !important;
        border-color: #b3e19d !important;
    }
}
.info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
    &.plain {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #fff !important;
        background-color: #c8c9cc !important;
        border-color: #c8c9cc !important;
    }
    &.loading {
        background-color: #c8c9cc !important;
        border-color: #c8c9cc !important;
    }
}
.warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
    &.plain {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
        &:hover,
        &:focus {
            color: #fff;
            background-color: #e6a23c;
            border-color: #e6a23c;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #fff !important;
        background-color: #f3d19e !important;
        border-color: #f3d19e !important;
    }
    &.loading {
        background-color: #f3d19e !important;
        border-color: #f3d19e !important;
    }
}
.danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
    &.plain {
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
        &:hover,
        &:focus {
            color: #fff;
            background-color: #f56c6c;
            border-color: #f56c6c;
        }
    }
    &.disabled {
        cursor: not-allowed !important;
        color: #fff !important;
        background-color: #fab6b6 !important;
        border-color: #fab6b6 !important;
    }
    &.loading {
        background-color: #fab6b6 !important;
        border-color: #fab6b6 !important;
    }
}

//size
.large {
    padding: 12px 19px;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
}
.default {
    padding: 8px 15px;
    height: 32px;
    font-size: 14px;
    border-radius: 4px;
}
.small {
    padding: 5px 11px;
    height: 24px;
    font-size: 12px;
    border-radius: 3px;
}
.ml5 {
    margin-left: 5px;
}
</style>
