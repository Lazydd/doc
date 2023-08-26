# 快速上手

本节将介绍如何在项目中使用 ddlazy-ui

## 引入 ddlazy-ui

你可以引入整个 ddlazy-ui，或是根据需要仅引入部分组件

### 完整引入

```js
import { createApp } from 'vue';
import ddlazyUi from 'ddlazy-ui-plus';
import 'ddlazy-ui-plus/lib/index.css';
import App from './App.vue';

const app = createApp(App);

app.use(ddlazyUi);
app.mount('#app');
```

### 按需引入

```js
import { createApp } from 'vue';
import 'ddlazy-ui-plus/lib/index.css';
import App from './App.vue';

const app = createApp(App);
import {
	ddButton,
	ddIcon,
	ddLink,
	ddRow,
	ddCol,
	ddTable,
	ddTableColumn,
	ddRadio,
	ddRadioGroup,
	ddRadioButton,
	ddCheckbox,
	ddCheckboxGroup,
	ddCheckboxButton,
	ddInput,
	ddInputNumber,
	ddNumber,
	ddSelect,
	ddOption,
	ddScroll,
	ddSwitch,
	ddSlider,
	ddTag,
	ddProgress,
	ddUpload,
	ddColorPicker,
	ddTooltip,
	ddPagination,
	ddBadge,
	ddAvatar,
	ddTabs,
	ddTabPane,
	ddBreadcrumb,
	ddBreadcrumbItem,
	ddCard,
	ddDivider,
	ddBacktop,
	ddDialog,
	ddForm,
	ddFormItem,
	ddEmpty,
	ddTree,
	ddSkeleton,
	ddCollapse,
	ddCollapseItem,
	ddPopconfirm,
	ddSteps,
	ddStep,
	ddTransfer,
	ddCarousel,
	ddCarouselItem,
	ddTimeline,
	ddTimelineItem,
	ddDropdown,
	ddDropdownMenu,
	ddDropdownItem,
	ddTimeSelect,
	ddTransition,
	ddTimePicker,
	ddCascader,
	ddImage,
	ddDatePicker,
	ddMenu,
	ddEcharts,
	ddUeditor,
	ddMap,
	ddSignature,
	ddPrint,
	Message,
	ddLoading,
	ddMessageBox,
} from 'ddlazy-ui-plus';

app.use(ddButton);
app.use(ddIcon);
app.use(ddLink);
app.use(ddRow);
app.use(ddCol);
app.use(ddTable);
app.use(ddTableColumn);
app.use(ddRadio);
app.use(ddRadioGroup);
app.use(ddRadioButton);
app.use(ddCheckbox);
app.use(ddCheckboxGroup);
app.use(ddCheckboxButton);
app.use(ddInput);
app.use(ddInputNumber);
app.use(ddSelect);
app.use(ddOption);
app.use(ddScroll);
app.use(ddSwitch);
app.use(ddSlider);
app.use(ddTag);
app.use(ddProgress);
app.use(ddUpload);
app.use(ddColorPicker);
app.use(ddTooltip);
app.use(ddPagination);
app.use(ddBadge);
app.use(ddAvatar);
app.use(ddTabs);
app.use(ddTabPane);
app.use(ddBreadcrumb);
app.use(ddBreadcrumbItem);
app.use(ddCard);
app.use(ddDivider);
app.use(ddBacktop);
app.use(ddDialog);
app.use(ddForm);
app.use(ddFormItem);
app.use(ddEmpty);
app.use(ddTree);
app.use(ddSkeleton);
app.use(ddCollapse);
app.use(ddCollapseItem);
app.use(ddPopconfirm);
app.use(ddSteps);
app.use(ddStep);
app.use(ddTransfer);
app.use(ddCarousel);
app.use(ddCarouselItem);
app.use(ddTimeline);
app.use(ddTimelineItem);
app.use(ddDropdown);
app.use(ddDropdownMenu);
app.use(ddDropdownItem);
app.use(ddTimeSelect);
app.use(ddTransition);
app.use(ddTimePicker);
app.use(ddCascader);
app.use(ddImage);
app.use(ddDatePicker);
app.use(ddMenu);
app.use(ddEcharts);
app.use(ddUeditor);
app.use(ddMap);
app.use(ddSignature);
app.use(ddPrint);
app.use(Message);
app.use(ddLoading);
app.use(ddMessageBox);
```
