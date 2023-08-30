# Button

## Basic usage

:::demo

```vue
<template>
	<div>
		<div class="mt1">
			<dd-button>Default</dd-button>
			<dd-button type="primary">Primary</dd-button>
			<dd-button type="success">Success</dd-button>
			<dd-button type="info">Info</dd-button>
			<dd-button type="warning">Warning</dd-button>
			<dd-button type="danger">Danger</dd-button>
		</div>
		<div class="mt1">
			<dd-button plain>Default</dd-button>
			<dd-button type="primary" plain>Primary</dd-button>
			<dd-button type="success" plain>Success</dd-button>
			<dd-button type="info" plain>Info</dd-button>
			<dd-button type="warning" plain>Warning</dd-button>
			<dd-button type="danger" plain>Danger</dd-button>
		</div>
		<div class="mt1">
			<dd-button round>Default</dd-button>
			<dd-button type="primary" round>Primary</dd-button>
			<dd-button type="success" round>Success</dd-button>
			<dd-button type="info" round>Info</dd-button>
			<dd-button type="warning" round>Warning</dd-button>
			<dd-button type="danger" round>Danger</dd-button>
		</div>
		<div class="mt1">
			<dd-button icon="eletrical" circle />
			<dd-button icon="video1" type="primary" circle />
			<dd-button icon="electronics" type="success" circle />
			<dd-button icon="email" type="info" circle />
			<dd-button icon="furniture" type="warning" circle />
			<dd-button icon="gift1" type="danger" circle />
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

## Disabled Button

:::demo

```vue
<template>
	<div>
		<dd-button disabled>Default</dd-button>
		<dd-button type="primary" disabled>Primary</dd-button>
		<dd-button type="success" disabled>Success</dd-button>
		<dd-button type="info" disabled>Info</dd-button>
		<dd-button type="warning" disabled>Warning</dd-button>
		<dd-button type="danger" disabled>Danger</dd-button>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## Icon Button

:::demo

```vue
<template>
	<div>
		<dd-button type="primary" icon="auto" />
		<dd-button type="primary" icon="map" />
		<dd-button type="primary" icon="account" />
		<dd-button type="primary" icon="search">Search</dd-button>
		<dd-button type="primary">搜索</dd-button>
		<dd-button type="primary">
			Search
			<dd-icon icon="search" />
		</dd-button>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## Sizes

:::demo

```vue
<template>
	<div>
		<dd-button type="primary" size="large">Large</dd-button>
		<dd-button type="primary">Default</dd-button>
		<dd-button type="primary" size="small">Small</dd-button>
	</div>
</template>

<style lang="less" scoped>
.dd-button + .dd-button {
	margin-left: 12px;
}
</style>
```

:::

## Loading Button

:::demo

```vue
<template>
	<div>
		<dd-button type="primary" loading>Loading</dd-button>
	</div>
</template>
```

:::
