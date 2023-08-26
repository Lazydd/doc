# Button 按钮

## 基础用法

:::demo

```vue
<template>
	<div>
		<div class="mt1">
			<ddButton>默认按钮</ddButton>
			<ddButton type="primary">主要按钮</ddButton>
			<ddButton type="success">成功按钮</ddButton>
			<ddButton type="info">信息按钮</ddButton>
			<ddButton type="warning">警告按钮</ddButton>
			<ddButton type="danger">危险按钮</ddButton>
		</div>
		<div class="mt1">
			<ddButton plain>默认按钮</ddButton>
			<ddButton type="primary" plain>主要按钮</ddButton>
			<ddButton type="success" plain>成功按钮</ddButton>
			<ddButton type="info" plain>信息按钮</ddButton>
			<ddButton type="warning" plain>警告按钮</ddButton>
			<ddButton type="danger" plain>危险按钮</ddButton>
		</div>
		<div class="mt1">
			<ddButton round>默认按钮</ddButton>
			<ddButton type="primary" round>主要按钮</ddButton>
			<ddButton type="success" round>成功按钮</ddButton>
			<ddButton type="info" round>信息按钮</ddButton>
			<ddButton type="warning" round>警告按钮</ddButton>
			<ddButton type="danger" round>危险按钮</ddButton>
		</div>
		<div class="mt1">
			<ddButton icon="eletrical" circle />
			<ddButton icon="video1" type="primary" circle />
			<ddButton icon="electronics" type="success" circle />
			<ddButton icon="email" type="info" circle />
			<ddButton icon="furniture" type="warning" circle />
			<ddButton icon="gift1" type="danger" circle />
		</div>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
.mt1 + .mt1 {
	margin-top: 1em;
}
</style>
```

:::

## 禁用状态

:::demo

```vue
<template>
	<div>
		<ddButton disabled>默认按钮</ddButton>
		<ddButton type="primary" disabled>主要按钮</ddButton>
		<ddButton type="success" disabled>成功按钮</ddButton>
		<ddButton type="info" disabled>信息按钮</ddButton>
		<ddButton type="warning" disabled>警告按钮</ddButton>
		<ddButton type="danger" disabled>危险按钮</ddButton>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## 图标按钮

:::demo

```vue
<template>
	<div>
		<ddButton type="primary" icon="auto" />
		<ddButton type="primary" icon="map" />
		<ddButton type="primary" icon="account" />
		<ddButton type="primary" icon="search">搜索</ddButton>
		<ddButton type="primary">搜索</ddButton>
		<ddButton type="primary">
			搜索
			<ddIcon icon="search" />
		</ddButton>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## 不同尺寸

:::demo

```vue
<template>
	<div>
		<ddButton type="primary" size="large">Large</ddButton>
		<ddButton type="primary">Default</ddButton>
		<ddButton type="primary" size="small">Small</ddButton>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## 加载中

:::demo

```vue
<template>
	<div>
		<ddButton type="primary" loading>加载中</ddButton>
	</div>
</template>
```

:::
