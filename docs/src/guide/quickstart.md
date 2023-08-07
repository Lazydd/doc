# 快速上手

本节将介绍如何在项目中使用 ddlazy-ui

## 引入 ddlazy-ui

你可以引入整个 ddlazy-ui，或是根据需要仅引入部分组件

### 完整引入

```js
import Vue from "vue";
import ddlazyui from "ddlazyui";
import "ddlazyui/lib/ddlazy-ui.css";
import App from "./App.vue";

Vue.use(ddlazyui);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
```

### 按需引入

```js
import Vue from "vue";
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
} from "ddlazy-ui";

Vue.use(ddButton);
Vue.use(ddIcon);
Vue.use(ddLink);
Vue.use(ddRow);
Vue.use(ddCol);
Vue.use(ddTable);
Vue.use(ddTableColumn);
Vue.use(ddRadio);
Vue.use(ddRadioGroup);
Vue.use(ddRadioButton);
Vue.use(ddCheckbox);
Vue.use(ddCheckboxGroup);
Vue.use(ddCheckboxButton);
Vue.use(ddInput);
Vue.use(ddInputNumber);
Vue.use(ddSelect);
Vue.use(ddOption);
Vue.use(ddScroll);
Vue.use(ddSwitch);
Vue.use(ddSlider);
Vue.use(ddTag);
Vue.use(ddProgress);
Vue.use(ddUpload);
Vue.use(ddColorPicker);
Vue.use(ddTooltip);
Vue.use(ddPagination);
Vue.use(ddBadge);
Vue.use(ddAvatar);
Vue.use(ddTabs);
Vue.use(ddTabPane);
Vue.use(ddBreadcrumb);
Vue.use(ddBreadcrumbItem);
Vue.use(ddCard);
Vue.use(ddDivider);
Vue.use(ddBacktop);
Vue.use(ddDialog);
Vue.use(ddForm);
Vue.use(ddFormItem);
Vue.use(ddEmpty);
Vue.use(ddTree);
Vue.use(ddSkeleton);
Vue.use(ddCollapse);
Vue.use(ddCollapseItem);
Vue.use(ddPopconfirm);
Vue.use(ddSteps);
Vue.use(ddStep);
Vue.use(ddTransfer);
Vue.use(ddCarousel);
Vue.use(ddCarouselItem);
Vue.use(ddTimeline);
Vue.use(ddTimelineItem);
Vue.use(ddDropdown);
Vue.use(ddDropdownMenu);
Vue.use(ddDropdownItem);
Vue.use(ddTimeSelect);
Vue.use(ddTransition);
Vue.use(ddTimePicker);
Vue.use(ddCascader);
Vue.use(ddImage);
Vue.use(ddDatePicker);
Vue.use(ddMenu);
Vue.use(ddEcharts);
Vue.use(ddUeditor);
Vue.use(ddMap);
Vue.use(ddSignature);
Vue.use(ddPrint);
Vue.use(Message);
Vue.use(ddLoading);
Vue.use(ddMessageBox);
```
