# 更新日志

## ## [1.5.0](/compare/v1.4.0...v1.5.0) (2024-12-09)
### 🐛 Bug Fixes | Bug 修复
* 🐛 修复 Button 按钮设置为 block 无效的问题 
* 🐛 修复 Cell 设置 label 过长时影响页面结构的问题
* 🐛 修复 Collapse v-model绑定数据变化时未更新折叠面板状态的问题
* 🐛 修复 GridItem 徽标属性类型标注错误的问题
* 🐛 修复 Progress 无法设置进度为 0 的问题 
* 🐛 修复 Swiper 在支付宝小程序平台点击事件无效的问题
* 🐛 修复 Tab 未渲染项高度会影响整体高度的问题
* 🐛 修复 vue-tsc 校验不通过的问题
* 🐛 修复微信小程序在iOS设备上处于后台一段时间后抖动的问题
### ✏️ Documentation | 文档
* ✏️  添加 MessageBox 自定义按钮样式的文档
* ✏️  优化 Cell 关于 clickable 和 is-link 的介绍
* ✏️  增加 ConfigProvider 组件设定全局共享示例 
* ✏️  Table 表格组件提供结合分页器使用的demo 
### ✨ Features | 新功能
* ✨ 优化 Divider 分割线功能支持虚线、垂直等功能 
* ✨ Calendar 优化选中样式和滚动位置处理并支持屏蔽内置cell
* ✨ Curtain 幕帘新增 close 插槽和自定义关闭插槽样式类 
* ✨ DropMenuItem 增加自定 Popup 样式参数 
* ✨ Input、Textarea在APP-VUE和H5端支持inputmode
* ✨ MessageBox 新增确认、取消按钮的 ButtonProps 属性
* ✨ Radio添加icon-placement属性用于控制图标方向
* ✨ Segmented 提供 updateActiveStyle 方法设置激活样式 
* ✨ Table 支持设置不固定表头
* ✨ Upload 支持文件重传

[1.4.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.14...v1.4.0) (2024-11-24)

### ✨ Features | 新功能

- ✨ Curtain 幕帘组件支持设置 z-index
- ✨ Siderbar 侧边栏添加 before-change 属性支持异步更新, closes
- ✨ Swiper 支持指定轮播项的文件类型, closes
- ✨ Tab 添加 lazy 属性支持配置是否开启懒加载, closes
- ✨ Tabs 新增 `autoLineWidth` 设置底部条宽度自动同步文本内容'
- ✨ Tabs 新增 map-title 属性支持修改导航地图标题, closes
- ✨ Tabs 支持设置徽标, closes
- ✨ tabs 支持左对齐, closes

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Collapse 使用 toggleAall 方法时不会触发 before-expand 钩子的问题
- 🐛 修复 CollapseItem 在微信小程序平台使用 title 插槽时宽度无法撑满的问题
- 🐛 修复 DateTimePicker 设置为 time 类型时绑定值无法设置为空数组的问题, closes
- 🐛 修复 FloadingPanel 设置 height 不生效的问题, closes
- 🐛 修复 Slider 滑块处于极值时会遮挡 max 和 min 的问题, closes
- 🐛 修复 wui-select-picker 组件单选搜索高亮 class 错误
- 🐛 修复 Collapse 折叠面板组件内容溢出问题

### ✏️ Documentation | 文档

- ✏️ 调整文档中 gitee 镜像仓库的地址
- ✏️ 调整 join-group 页面加群的问题
- ✏️ 添加 Cell 单元格 border 属性的文档, closes
- ✏️ 添加关于 Button 自定义样式设置阴影的文档, closes
- ✏️ 文档新增演示页面源码和组件源码链接
- ✏️ 优化 NoticeBar 垂直滚动示例
- ✏️ 增加 Input 字数限制的示例
- ✏️ 增加关于 Tabs 属性 autoLineWidth 的介绍和最低版本要求

### [1.3.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.13...v1.3.14) (2024-11-09)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Curtain 幕帘组件在某些情况下关闭按钮不显示的问题, closes
- 🐛 修复 Picker 和 SelectPicker 清空按钮颜色与 Input 不统一的问题
- 🐛 修复 upload 组件 header 默认值错误的问题, closes

### ✏️ Documentation | 文档

- ✏️ 文档中添加 wui-demo 的介绍
- ✏️ 增加 create-uni 创建快速上手项目的介绍

### ✨ Features | 新功能

- ✨ 使用 Transition 重构 Popup 为 center 类型的 Popup 添加 zoom-in 动画 , closes
- ✨ 移除 Switch 默认的 size 支持在不指定 size 的情况下使用 css 变量设置组件尺寸, closes
- ✨ 优化 Toast、Message 和 Notify 组件的函数式调用方案
- ✨ 支持 Button 在支付宝小程序平台 opentype 设为 getAuthorize 用于获取手机号和用户信息
- ✨ Form 校验规则 validator 支持传入 Error 作为校验提示, closes
- ✨ Loadmore 提供 loadingProps 属性用于自定义 loading 样式
- ✨ Table 行高支持 Number 和 String 类型

### [1.3.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.12...v1.3.13) (2024-10-25)

### ✏️ Documentation | 文档

- ✏️ 快速上手增加 vue 和 uni-app 的快速上手链接
- ✏️ 添加关于深度选择的介绍
- ✏️ 文档新增展示优秀案例
- ✏️ 优化文档快速上手章节

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Notice 在 Tabbar 页面时跳转至其他页面导致播放异常的问题并提供 reset 方法, closes

### ✨ Features | 新功能

- ✨ 为 Picker 和 SelectPicker 补充 clear 事件
- ✨ 移除 Navbar 点击热区的激活态样式, closes
- ✨ cell 组件 border 属性以 props 为最高优先级
- ✨ picker 和 selectPicker 添加 clearable 属性
- ✨ Swiper 轮播组件支持展示视频和设置轮播项标题

### [1.3.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.11...v1.3.12) (2024-10-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Upload 文件小程序找不到文件,显示的问题
- 🐛 Radio 修复在 cell 里面高度的问题

### ✏️ Documentation | 文档

- ✏️ 优化捐赠榜单中捐赠人链接的展示效果
- ✏️ Upload 添加 preview-cover 最低版本

### ✨ Features | 新功能

- ✨ 新增 FloatingPanel 浮动面板组件, closes
- ✨ 新增支持法语、日语等 9 种语言
- ✨ StatusTip 缺省提示组件提供图片内容插槽
- ✨ ToolTip 组件 offset 属性支持数组和对象写法, closes
- ✨ Upload 新增 preview-cover 插槽
- ✨Calendar 日历添加 open 事件 ()), closes )

### [1.3.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.10...v1.3.11) (2024-09-23)

### ✏️ Documentation | 文档

- ✏️ 移除文档中 CountTo 不支持的 type

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复)产生的使用未定义变量的问题
- 🐛 修复与@uni-helper/uni-typed 搭配使用时 tsc 报类型错误的问题并更新依赖, closes
- 🐛 修复 Button 设置为 hairline 时圆角显示异常的问题, closes
- 🐛 修复 Input、Textarea 未设置 labelWidth 时通过 CSS 变量设置 label 宽度无效的问题, closes
- 🐛 修复 loadmore 组件属性 errorText 存在默认值导致国际化失效的问题
- 🐛 修复 Radio 点击失效的问题, closes
- 🐛 确保 inputNumber 输入值在设定的最小值和最大值之间, closes

### ✨ Features | 新功能

- ✨ 迁移 StatusTip 组件的图片资源
- ✨ count-to 组件添加 type 属性
- ✨ Fab 悬浮按钮组件支持自定义触发器和控制能否展开, closes
- ✨ Img 组件新增属性 show-menu-by-longpress 支持微信小程序长按弹出菜单栏, closes
- ✨ Input、Textarea 增加 ignoreCompositionEvent 属性, closes
- ✨ InputNumber 步进器新增支持 adjustPosition 属性, closes

### [1.3.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.9...v1.3.10) (2024-09-08)

### ✨ Features | 新功能

- ✨ 新增 Keyboard 虚拟键盘支持车牌号输入, closes

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 col-picker 点击遮罩关闭执行两次问题
- 🐛 修复 wui-upload 关闭按钮受项目行高影响的问题

### ✏️ Documentation | 文档

- ✏️ 文档中添加 KeyBoard 的版本要求
- ✏️ 优化多列选择器组件文档

### [1.3.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.8...v1.3.9) (2024-09-01)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复某些场景下 wui-textarea 属性 maxlength 无效的问题
- 🐛 修复 IndexBar 组件更新数据时显示异常的问题, closes
- 🐛 修复 Input 和 Textarea 设置为 readonly 时在部分 iOS 手机可以点击聚焦的问题, closes
- 🐛 修复 Picker 多级联动未应用 picker 选择值时取消后打开展示列数据错误的问题, closes

### ✏️ Documentation | 文档

- ✏️ 调整数字滚动组件文档路径
- ✏️ 更正 form demo 方法名不一致
- ✏️ 优化 MessageBox 示例 demo
- ✏️ 增加安卓演示 demo 下载二维码
- ✏️ 更正 text 组件 doc 的 type 属性默认值

### ✨ Features | 新功能

- ✨ config-provider 支持 customClass 与 customeStyle
- ✨ Form 设置提示模式为 toast 时优先显示顺序靠前的表单项的错误提示, closes
- ✨ img 图片组件 click 事件增加 mouseEvent 参数
- ✨ Text 支持传入 number 类型的 text, closes

### [1.3.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.7...v1.3.8) (2024-08-18)

### ✏️ Documentation | 文档

- ✏️ 补充 Form 设置 error-type 的示例
- ✏️ 修复常见问题中 useToast 入参错误的问题
- ✏️ 修复 textarea 组件的 maxlength 属性类型标注错误
- ✏️ 优化 MessageBox 和 Toast 文档中 selector 的介绍
- ✏️ Toast 文档增加唯一标识 selector 的介绍

### ✨ Features | 新功能

- ✨ 调整 Statistic 为 CountTo 组件并使用 useCountDown 重构
- ✨ 新增 statistic 数值显示
- ✨ Collapse 折叠面板组件支持嵌套使用, closes
- ✨ datetime-picker 增加自定义 Cell 样式属性
- ✨ form 表单新增 errorType 错误提示类型
- ✨Upload 组件支持手动上传并增加自定义上传函数, closes

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 checkbox-group 的 shape 无法作用到子组件的问题, closes
- 🐛 修复 DropDown 传入正确 direction 出现错误警告的问题
- 🐛 修复 picker-view 动态设置 columns 时获取选中值异常的问题, closes
- 🐛 修复 Textarea 组件暗黑模式下清空按钮样式不正确的问题

### [1.3.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.6...v1.3.7) (2024-08-06)

### ✏️ Documentation | 文档

- ✏️ 更新爱发电地址和示例 demo 二维码
- ✏️ 更新 README
- ✏️ 允许文档组件列表折叠收起

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 addUnit 工具方法为 string 类型的参数时未添加单位导致 swiper 高度丢失的问题
- 🐛 修复 Input 设置为 number 类型时绑定值重设为 0 时显示异常的问题, closes
- 🐛 修复 LockScroll 后切换页面无法滚动, closes
- 🐛 修复 Textarea 的 placeholder 无法设置空字符串问题, closes
- **type:** 🐛 修复 vue>=2.7 版本的 GlobalComponents 类型声明问题

### ✨ Features | 新功能

- ✨ 修复 Text 组件设置 color 属性后 lines 失效的问题, closes
- ✨ Input 组件新增 clear-triger 属性, closes
- ✨ Swiper 轮播组件增加 value-key 用于自定义目标字段属性名, closes
- ✨ Textarea 组件新增 clear-triger 属性, closes
- 组件 text 新增金额类型，前后插槽，下划线等功能
- **drop-menu:** 支持自定义图标以及 before-toggle

### [1.3.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.5...v1.3.6) (2024-07-26)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Button 为 disabled 状态时仍能触发 open-type 指定事件的问题, closes
- 🐛 修复 MessageBox 设置为 prompt 时输入框绑定值异常的问题

### ✏️ Documentation | 文档

- ✏️ 修复 Toast 组件文档中关于提示方法描述的错误
- ✏️ 修正 DateTimePicker 文档中关于 minDate 和 maxDate 类型标注错误的问题

### [1.3.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.4...v1.3.5) (2024-07-20)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Text 组件使用日期工具方法路径错误的问题, closes

### ✏️ Documentation | 文档

- ✏️ 文档中全局引入 ElTag 用于显示组件上线版本
- ✏️ 修复 RadioBox 文档中关于表单模式表述错误的问题
- ✏️ 优化 Segmented 分段器关于绑定激活项的文档

### [1.3.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.3...v1.3.4) (2024-07-19)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复双向滑块响应式丢失
- 🐛 修复 Input 组件[@input](https://github.com/input)事件参数错误的问题
- 🐛 修复 Table 组件异步填充数据源无效的问题, closes
- 🐛 修复 Upload 组件 accept 为 media 时图片预览顺序混乱的问题, closes
- 🐛 Button 按钮 click 事件直接透传 event, closes
- 修复 textarea 组件同时使用 auto-height 和 no-border 属性时，no-border 属性不生效

### ✨ Features | 新功能

- ✨ Button 按钮组件支持使用自定义组件, closes
- ✨ Toast 轻提示组件支持使用组件库内置和自定义图标, closes
- ✨ Upload 上传组件新增支持 successStatus 属性
- 新增 Text 文本组件

### ✏️ Documentation | 文档

- ✏️ 调整 QQ 群与提问相关文档
- ✏️ 移除示例 demo 中手机号等字样方便过审

### [1.3.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.2...v1.3.3) (2024-07-14)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 IndexBar 索引值显示错误的问题, closes

### ✏️ Documentation | 文档

- ✏️ 调整演示 demo 中图片到 npmmirror 上
- ✏️ 新增关于 messageBox 弹出多个的常见问题解答
- ✏️ 修复 SelectPicker 文档中存在的拼写错误, closes
- ✏️ Upload 文档增加微信隐私协议的介绍

### [1.3.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.1...v1.3.2) (2024-07-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ActionSheet 样式调整导致微信编译错误的问题

### [1.3.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.0...v1.3.1) (2024-07-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复暗黑模式下 Grid 和 ActionSheet 组件部分样式异常的问题, closes

## [1.3.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.28...v1.3.0) (2024-07-07)

### ✨ Features | 新功能

- ✨ Upload 上传组件新增支持上传视频和文件, closes
- ✨select-picker 组件增加 open、close 事件

### ✏️ Documentation | 文档

- ✏️ 调整 ColPicker 多列选择器文档中省市区数据源及演示 demo
- ✏️ DropDownItem 文档增加 closed 和 opened 介绍
- ✏️ PasswordInput 修复示例代码错误的问题

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Calendar 等组件暗黑模式部分样式异常的问题, closes
- 🐛 修复 IndexBar 点击索引序号时未显示预期索引值的问题, closes
- 🐛 修复 Swiper 在微信端长时间处于后台出现抖动的问题, closes

### [1.2.28](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.27...v1.2.28) (2024-06-24)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 omitBy 工具方法实现错误导致 Tabbar 等组件徽标显示异常的问题

### [1.2.27](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.26...v1.2.27) (2024-06-21)

### ✨ Features | 新功能

- ✨ add title slot for wui-collapse-item, closes

### ✏️ Documentation | 文档

- ✏️ 调整文档中关于类型声明文件的配置
- ✏️ Input 密码输入框示例移除 disabled 属性

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ActionSheet 禁用和加载状态时仍有点击效果的问题, closes
- 🐛 修复 Sidebar 等组件 css 变量前缀错误的问题

### [1.2.26](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.25...v1.2.26) (2024-06-14)

### ✨ Features | 新功能

- ✨ fab 组件添加 gap 属性

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Fab 初始化时存在初始位置闪现的问题
- 🐛 修复 Transition 被打断时出现显示异常的问题

### [1.2.25](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.24...v1.2.25) (2024-06-09)

### ✨ Features | 新功能

- ✨ Pickerview 选择器新增 immediate-change 属性，目前微信和支付宝小程序支持。
- ✨ Slider 暴露 initSlider 方法用于外部初始化 slider 宽度信息, closes

### ✏️ Documentation | 文档

- ✏️ 常见问题中增加关于交流群的内容
- ✏️ 更新文档中组件数量
- ✏️ 增加关于微信小程序 v-if 和 slot 执行顺序异常问题的介绍
- ✏️ 修正 upload 组件文档中 change 事件的 dmeo 错误

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复时间选择器设置 minDate 之后选择器显示值和实际选择值不一致的问题, closes
- 🐛 修复 ImgCropper 未暴露 resetImg 和 setRoate 方法的问题, closes
- 🐛 修复 Tag 在钉钉小程序平台 close 方法不执行的问题, closes

### [1.2.24](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.23...v1.2.24) (2024-06-03)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 支付宝小程序 number/digit 类型使用 maxlength=-1 时 v-model 失效的问题

### [1.2.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.22...v1.2.23) (2024-06-02)

### ✏️ Documentation | 文档

- ✏️ 更新 LICENSE 文件地址
- ✏️ 修复 loading 组件示例代码中文标点符号、img-cropper 组件示例代码标签缺失的问题
- update select-picker doc

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Cell 的 value 为 0 时无法渲染的问题
- 🐛 修复 Sticky 在 h5 和 App 端缓慢拖动时存在几率始终固定在顶部的问题

### ✨ Features | 新功能

- ✨ 调整 Circle 环形进度条在微信小程序端使用 canvas2d 支持同层渲染

### [1.2.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.21...v1.2.22) (2024-05-23)

### ✏️ Documentation | 文档

- ✏️ 组件库介绍组件数量调整至 70+

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Form 指定 prop 为`a.b`时校验失败的问题

### [1.2.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.20...v1.2.21) (2024-05-20)

### ✨ Features | 新功能

- ✨ 添加索引栏组件
- ✨ img 组件添加 loading、error 插槽
- ✨ skeleton 添加默认内容插槽
- add backtop

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Cell 组件单独使用时设置 border 无效的问题
- 🐛 修复 Picker 选择器多列选择模式绑定值为空数组时将列第一项作为显示值的问题
- 🐛 修复 Sticky 吸顶组件在微信小程序中放置在页面顶部时吸顶失效的问题, closes
- 修复 wui-button 在自定义样式时激活态样式问题

### ✏️ Documentation | 文档

- ✏️ 常见问题增加关于 useToast 等 hooks 的答疑以及自定义编译平台的内容
- ✏️ 文档中增加解释导入方式的 faq

### [1.2.20](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.19...v1.2.20) (2024-05-12)

### ✏️ Documentation | 文档

- ✏️ 调整捐赠榜单和友情链接的数据到 cloudflare 上
- ✏️ 推荐文档地址调整至 cloudflare
- ✏️ Curtain 组件 width 属性标记为 number 类型, closes

### ✨ Features | 新功能

- Segmented 组件添加 click 事件

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 MessageBox 中使用 TextArea 字数统计样式错误的问题, closes
- 🐛 修复 PickerView 可以滚动到禁用选项的问题, closes
- 🐛 修复 Popover 指定 placement 后箭头显示异常的问题
- 🐛 修复 release 脚本处理最低版本号问题
- 🐛 修复 Sticky 组件获取节点错误的问题
- 修复 wui-calendar 未抛出事件

### [1.2.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.18...v1.2.19) (2024-05-01)

### ✨ Features | 新功能

- ✨ `Slider`组件`min`值允许负数, closes
- ✨ fab 添加 draggable 属性
- ✨ table 组件添加 index 参数

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复`slider`组件`step`属性无效问题, closes
- 🐛 修复 Cell 组件 title 文字对齐方式受外部影响的问题, closes
- 🐛 修复 SelectPicker 无默认值时仍会查找选择项节点的问题, closes
- 🐛 修复 Slider 组件 max 和 min 变化时滑块和进度条未更新的问题

### ✏️ Documentation | 文档

- ✏️ 补充 Table 组件关于 Events 的介绍, closes

### [1.2.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.17...v1.2.18) (2024-04-23)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 InputNumber 步进器组件在初始化时未发生变化仍触发 change 的问题
- 🐛 修复 InputNumber 的 change 事件无法取到当前绑定值的更新的问题

### [1.2.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.16...v1.2.17) (2024-04-18)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 debounce 调整后导致 tabs 无法切换的问题

### [1.2.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.15...v1.2.16) (2024-04-17)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Gap 组件文档中 safeAreaBottom 属性名错误的问题
- 🐛 修复 PickerView 在绑定值为 0 时无法生效的问题

### ✏️ Documentation | 文档

- ✏️ 补充 Img 图片支持图片预览的最低支持版本, closes

### ✨ Features | 新功能

- ✨ 阻止 tag 的关闭和新增事件冒泡
- ✨ Checkbox 新增 toggle 方法, closes
- ✨ date-time-picker-view 添加年选择
- ✨ Noticebar 通知栏新增支持 click 点击事件
- ✨ TableColumn 组件 value 插槽新增 index 参数

### [1.2.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.14...v1.2.15) (2024-04-11)

### ✏️ Documentation | 文档

- ✏️ 优化文档及演示 demo 访问速度

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Button 不同尺寸显示固定尺寸 icon 样式不协调的问题, closes
- 🐛 修复 Upload 自定义上传样式时未应用 limit 数量限制和 customEvokeClass 的问题

### ✨ Features | 新功能

- ✨ MessageBox 支持确认前置处理钩子 beforeConfirm, closes
- ✨ Toast 轻提示增加 opened、closed 两个钩子

### [1.2.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.13...v1.2.14) (2024-04-09)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 NoticeBar 通知栏在小程序端垂直滚动无效的问题

### [1.2.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.12...v1.2.13) (2024-04-08)

### ✏️ Documentation | 文档

- ✏️ demo 首页使用 Cell 组件重构显示样式

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复升级 vue 到 3.4.2.之后 defineEmits 位置不规范导致访问'emit'报错的问题, closes
- 🐛 修复 NumberKeyboard 暗黑模式无效的问题
- 🐛 修复 Upload 组件 sourceType 属性丢失默认值导致在 iOS 系统微信小程序报错的问题, closes

### [1.2.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.11...v1.2.12) (2024-04-07)

### ✨ Features | 新功能

- ✨ 增强`notice-bar`组件`vertical`模式下插槽的功能
- ✨ NumberKeyboard 数字键盘增加名为 title 的插槽, closes
- ✨ StatusTip 缺省提示组件新增支持图片 mode 和自定义图片宽高
- ✨ Swiper 轮播为 image-mode 增加 ts 类型标注

### 🐛 Bug Fixes | Bug 修复

- 修复 step 的 description 插槽不显示的 bug

### ✏️ Documentation | 文档

- ✏️ 调整演示 demo iframe 加载完成后再同步当前是否暗黑模式, closes
- ✏️ Steps 步骤条增加控制进度的示例

### [1.2.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.10...v1.2.11) (2024-04-06)

### ⚡ Performance Improvements | 性能优化

- ⚡ 优化 Calendar 日历选择器打开关闭时的动画效果

### ✏️ Documentation | 文档

- ✏️ `notice-bar`组件补充`event`事件
- ✏️ 优化文档与演示 demo 同步暗黑模式的逻辑, closes

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ActionSheet 丢失 props 默认值的问题
- 🐛 修复 Calendar 部分文字运行时切换国际化未应用国际化文字的问题
- 🐛 修复 Calendar 的 type 为 datetime 且无默认值时无法在首次选择日期后选择时间的问题, closes
- 🐛 修复 search 组件 suffix 插槽无法使用的问题

### ✨ Features | 新功能

- ✨ `notice-bar`增加垂直滚动功能, closes
- ✨ `notice-bar`增加多文本轮播功能
- ✨ `upload`组件增加`mode`属性传递给预览`image`, closes
- ✨ img 组件的 mode 属性增加类型`ImageMode`
- ✨ img 组件增加 enable-preview 属性来支持点击预览功能, closes
- ✨ swiper 组件增加 current 属性控制轮播项功能, closes

### [1.2.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.9...v1.2.10) (2024-04-02)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Step 组件 description 插槽无法使用的问题
- 🐛 修复 Toast、MessageBox 二次打开时部分参数未重置的问题

### ✨ Features | 新功能

- ✨ 为所有组件补充 customStyle 属性, closes

### ✏️ Documentation | 文档

- ✏️ 更新 vitepress 至 1.0.1
- ✏️ 修复更新 vitepress 至 1.0.1 后友情链接丢失 logo 的问题
- ✏️ Steps 文档标题调整为步骤条

### [1.2.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.8...v1.2.9) (2024-04-01)

### ✨ Features | 新功能

- ✨ Segmented 分段器 change 事件参数类型扩充为 SegmentedOption, closes

### [1.2.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.7...v1.2.8) (2024-03-30)

### 🐛 Bug Fixes | Bug 修复

- 修复 useLocale 不传 message 会丢失原有语言配置的问题

### ✨ Features | 新功能

- ✨ SelectPicker 单选模式支持自动完成, closes

### ✏️ Documentation | 文档

- ✏️ 文档中增加@uni-helper/vite-plugin-uni-components 的使用提示

### [1.2.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.6...v1.2.7) (2024-03-29)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 DatePicker 占位符展示缺失的问题
- 🐛 修复 DateTimePicker 区域选择极值计算错误的问题
- 🐛 修复 picker-view 初始化报错的问题, closes
- 🐛 修复 picker 选择器在 APP 端包装二维数组逻辑错误导致无法实现多列选择器的问题
- 🐛 移除文件移动时 volar 变更文件路径错误导致.vue 文件中多出的无用路径字符串

### [1.2.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.5...v1.2.6) (2024-03-27)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Picker 未选择时显示第一列值的问题
- 🐛 修复 DatetimePicker 区间模式未选值时显示占位符错误的问题

### [1.2.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.4...v1.2.5) (2024-03-24)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 textarea 在支付宝小程序上清除按钮点击热区失效的问题

### [1.2.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.3...v1.2.4) (2024-03-23)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 textarea、input 的 label 存在 icon 时高度异常的问题
- 🐛 修复 textarea 无法换行的问题

### ✏️ Documentation | 文档

- ✏️ 调整组件库基于 vite 配置自动引入组件的介绍
- ✏️ 增加 steps 设置激活项的介绍

### [1.2.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.2...v1.2.3) (2024-03-20)

### ✏️ Documentation | 文档

- ✏️ 修复部分外部链接不可用的问题

### 🐛 Bug Fixes | Bug 修复

- 修复 checkbox 单独使用时无法切换选中状态的问题

### [1.2.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.1...v1.2.2) (2024-03-19)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 picker 选择器绑定值 value 值为 0 时无法生效的问题, closes

### [1.2.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.0...v1.2.1) (2024-03-19)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复部分可为 null 的 props 丢失 null 类型的问题

## [1.2.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.10...v1.2.0) (2024-03-19)

### ✨ Features | 新功能

- ✨ typescript 类型支持增强

### [1.1.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.9...v1.1.10) (2024-03-15)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 tabbar 默认 shape 固定底部安全区无遮挡的问题

### [1.1.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.8...v1.1.9) (2024-03-11)

### ✏️ Documentation | 文档

- ✏️ 推荐使用托管在 gitee 上的文档地址

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 textarea 在微信小程序平台下部分安卓手机 maxlength 不生效的问题

### [1.1.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.7...v1.1.8) (2024-03-10)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 transitiont 打开后立即关闭时无法关闭的问题

### [1.1.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.6...v1.1.7) (2024-03-09)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 badge 组件多出一个 script 标签的问题, closes

### [1.1.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.5...v1.1.6) (2024-03-06)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabar 为 round 类型时开启 safeAreaInsetBottom 是样式异常的问题

### [1.1.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.4...v1.1.5) (2024-03-05)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Search、Input 等组件 clear 事件在 value 变更前触发的问题, closes

### ✏️ Documentation | 文档

- ✏️ 首页增加常见问题的入口

### [1.1.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.3...v1.1.4) (2024-03-04)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Navbar 显示下边框时 fixed 不生效的问题

### ✏️ Documentation | 文档

- ✏️ 增加支付宝小程序 styleIsolation 配置的文档

### [1.1.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.2...v1.1.3) (2024-03-03)

### ✏️ Documentation | 文档

- ✏️ 文档中增加提问的智慧和 toast、message 组件的常见问题

### [1.1.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.1...v1.1.2) (2024-03-01)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Button 会存在一个默认 border 的问题

### [1.1.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.0...v1.1.1) (2024-02-29)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ImgCropper 在钉钉小程序平台无法展示所选图片的问题
- 🐛 修复微信小程序 css 使用标签选择器抛出警告的问题（wui-img）

## [1.1.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.0.0...v1.1.0) (2024-02-27)

### ✨ Features | 新功能

- ✨ Button 支持微信小程序 chooseavatar 和 agreeprivacyauthorization 事件
- ✨ DropDown 组件支持钉钉小程序
- ✨ Slider 支持钉钉小程序

### ✏️ Documentation | 文档

- ✏️ 新增支持钉钉小程序平台
- ✏️ 修复 Segment 演示 demo 在钉钉小程序平台展示异常的问题
- ✏️ 支持平台的介绍中新增支付宝小程序

## [1.0.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.1...v1.0.0) (2024-02-26)

### ✨ Features | 新功能

- ✨ 支持支付宝小程序并提供 ConfigProvider 的便利性优化
- ✨ sticky 组件支持支付宝平台

### ✏️ Documentation | 文档

- ✏️ 演示 demo 增加组件库版本号的显示

### [0.3.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.0...v0.3.1) (2024-02-26)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复大尺寸 checkbox 选中样式异常的问题

## [0.3.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.23...v0.3.0) (2024-02-21)

### ✨ Features | 新功能

- ✨ 调整 Button 按钮样式受主色控制并优化幽灵按钮显示效果

### ✏️ Documentation | 文档

- ✏️ 修复 select-picker 组件绑定值描述错误的问题, closes
- ✏️ 增加 Button 细边框幽灵按钮的使用说明

### [0.2.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.22...v0.2.23) (2024-02-07)

### ✏️ Documentation | 文档

- ✏️ 文档支持显示友情链接
- ✏️ 友情链接支持来自线上配置

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 MessageBox 国际化不生效的问题, closes

### [0.2.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.21...v0.2.22) (2024-01-30)

### ✏️ Documentation | 文档

- ✏️ 修正 Popover 组件文档中 menuclick 示例错误的问题

### [0.2.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.19...v0.2.21) (2024-01-28)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Dropdown 组件点击已展开项时无法关闭的问题

### ✨ Features | 新功能

- ✨ 支持国际化

### [0.2.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.18...v0.2.19) (2024-01-25)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 绑定值无法为 null 的问题
- 🐛 修复多列、单复选选择器列更新时显示值未更新的问题, closes

### [0.2.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.17...v0.2.18) (2024-01-24)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 CheckBox 组件的选中色无法应用到 css 变量的问题
- 🐛 修复 Radio 组件的选中色无法应用到 css 变量的问题

### [0.2.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.16...v0.2.17) (2024-01-23)

### ✨ Features | 新功能

- ✨ Form 表单组件提供开关控制是否 model 变化时重置提示信息, closes

### [0.2.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.15...v0.2.16) (2024-01-21)

### ✏️ Documentation | 文档

- ✏️ 修复文档中关于日期选择器最大日期描述错误的问题

### [0.2.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.14...v0.2.15) (2024-01-15)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tab class 类名属性错误的问题

### ✏️ Documentation | 文档

- ✏️ 修复 Upload 文档中 before-upload 钩子参数描述错误的问题

### [0.2.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.13...v0.2.14) (2024-01-14)

### ✨ Features | 新功能

- ✨ InputNumber 步进器支持禁用输入框

### [0.2.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.12...v0.2.13) (2024-01-12)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复演示文档刷新后指向 localhost 的问题

### [0.2.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.11...v0.2.12) (2024-01-11)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabbar 错误地抛出提示信息的问题

### ✏️ Documentation | 文档

- ✏️ 增加 Circle 组件使用插槽的示例
- ✏️ 增加展示 gitee 的 star 徽标

### [0.2.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.10...v0.2.11) (2024-01-09)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Overlay 类型声明错误的问题

### ✏️ Documentation | 文档

- ✏️ 提供托管在 Giteee 上的文档网站

### [0.2.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.9...v0.2.10) (2024-01-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 col-picker 暗黑模式下标题文字颜色不清楚的问题
- 🐛 修复 steps 组件自定义图标显示异常的问题
- 🐛 修复支付宝小程序暗黑模式下 Input、Textarea 组件显示异常的问题

### [0.2.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.8...v0.2.9) (2024-01-07)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 col-picker 组件首次打开指示线位置异常的问题

### [0.2.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.7...v0.2.8) (2024-01-06)

### ✏️ Documentation | 文档

- ✏️ 展示 netlify 支持

### [0.2.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.5...v0.2.7) (2024-01-06)

### ✨ Features | 新功能

- ✨ 优化 provide/inject 的使用方式

### ✏️ Documentation | 文档

- ✏️ 文档网站增加自定义 footer
- ✏️ 修复 vitepress 自定义 footer 展示错误的问题

### [0.2.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.5...v0.2.6) (2024-01-06)

### ✨ Features | 新功能

- ✨ 优化 provide/inject 的使用方式

### ✏️ Documentation | 文档

- ✏️ 文档网站增加自定义 footer

### [0.2.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.4...v0.2.5) (2023-12-28)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Form 导入 FormRules、ErrorMessage 时未指定为 type 的问题
- 🐛 修复 SwipeAction 组件在 H5 端导致页面无法上下滚动的问题, closes

### [0.2.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.3...v0.2.4) (2023-12-27)

### [0.2.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.2...v0.2.3) (2023-12-27)

### ✏️ Documentation | 文档

- ✏️ 修复动态表单演示页面标题错误的问题

### [0.2.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.1...v0.2.2) (2023-12-26)

### 🐛 Bug Fixes | Bug 修复

- 🐛 移除 Swiper 的 list 中不必填的属性

### ✏️ Documentation | 文档

- ✏️ 修复 Textarea 文档示例错误的问题
- ✏️ 优化 Form 相关组件的文档介绍

### [0.2.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.0...v0.2.1) (2023-12-25)

### ✏️ Documentation | 文档

- ✏️ PassowrdInput 密码输入框组件增加文档标题

## [0.2.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.70...v0.2.0) (2023-12-24)

### ✨ Features | 新功能

- ✨ 新增 Form 表单组件
- ✨ 新增 PasswordInput 密码输入框
- ✨ 新增 textarea 文本域组件
- ✨ 增加父子组件 Provide/Inject 的 hooks

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 组件在支付宝平台存在一个默认 padding 的问题

### ✏️ Documentation | 文档

- ✏️ 调整主题定制相关文档
- ✏️ 增加 textarea 文本域组件功能的迁移说明
- ✏️ PasswordInput 密码输入框文档增加版本介绍

### [0.1.70](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.69...v0.1.70) (2023-12-23)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 picker 的列 value 为 0 时回显异常的问题, closes

### [0.1.69](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.68...v0.1.69) (2023-12-13)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Notify 使用文档错误的问题, closes

### [0.1.68](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.67...v0.1.68) (2023-12-07)

### ✏️ Documentation | 文档

- ✏️ 增加 Gap 组件的文档

### [0.1.67](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.66...v0.1.67) (2023-12-06)

### ✨ Features | 新功能

- ✨ 新增 Gap 间隔槽组件

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Picker 组件 v-model 数据不更新的问题, closes

### [0.1.66](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.65...v0.1.66) (2023-12-01)

### ✨ Features | 新功能

- ✨ Tag 组件 type 增加属性值 default

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ActionSheet 组件设置 custom-class 无效的问题

### [0.1.65](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.64...v0.1.65) (2023-11-29)

### ✨ Features | 新功能

- ✨ 新增 NumberKeyboard 数字键盘组件
- Tag 新增类型标签添加 slot

### ✏️ Documentation | 文档

- ✏️ 新增关于 Tag 组件的 add 插槽的介绍

### [0.1.64](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.63...v0.1.64) (2023-11-25)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 DateTimePicker 标题展示和模式为区间时 before-confirm 参数错误的问题

### [0.1.63](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.62...v0.1.63) (2023-11-23)

### ✨ Features | 新功能

- ✨ CountDown 倒计时组件支持 custom-class 和 custom-style
- ✨ Search 搜索组件支持自动聚焦和清空后自动聚焦

### ✏️ Documentation | 文档

- ✏️ 修复文档中 config-provider 等页面的错误

### [0.1.62](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.61...v0.1.62) (2023-11-22)

### ✨ Features | 新功能

- ✨ Badge 徽标组件支持控制是否显示 0 值
- ✨ Upload 上传组件支持 h5 端获取文件后缀名

### ✏️ Documentation | 文档

- ✏️ 优化 Upload 文档中关于云存储内容的样式

### [0.1.61](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.60...v0.1.61) (2023-11-20)

### ✏️ Documentation | 文档

- ✏️ 修复 Tag 标签组件文档错乱的问题
- ✏️ ImgCropper 组件演示页面增加微信小程序隐私协议弹框

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Calendar 日历组件存在未定义属性导致警告的问题
- 🐛 修复 CountDown 倒计时组件文档手动控制示例错误的问题
- 🐛 修复 SelectPicker 组件 loading 状态仍可以滚动的问题

### ✨ Features | 新功能

- ✨ Upload 上传组件支持上传至云存储

### [0.1.60](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.59...v0.1.60) (2023-11-20)

### ✏️ Documentation | 文档

- ✏️ 修复 CountDown 倒计时组件默认 slot 用法的介绍错误的问题

### [0.1.59](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.58...v0.1.59) (2023-11-19)

### [0.1.58](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.57...v0.1.58) (2023-11-19)

### ✨ Features | 新功能

- ✨ 新增 CountDown 倒计时组件
- ✨ CountDown 倒计时组件支持小程序

### [0.1.57](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.56...v0.1.57) (2023-11-17)

### ✨ Features | 新功能

- ✨ 新增 Fab 悬浮动作按钮组件

### ✏️ Documentation | 文档

- ✏️ 修复 Cell 组件点击反馈的介绍错误的问题

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Table 表格组件数字英文换行失效的问题

### [0.1.56](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.55...v0.1.56) (2023-11-12)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabbar 标签栏组件 bordered 属性无效的问题

### [0.1.55](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.54...v0.1.55) (2023-11-12)

### 🐛 Bug Fixes | Bug 修复

- 修正 README.md 中[贡献指南]链接错误，跳转失败的问题。

### ✨ Features | 新功能

- ✨ Swiper 轮播图组件增加 imageMode 属性支持自定义图片裁剪缩放模式

### [0.1.54](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.53...v0.1.54) (2023-11-10)

### 🐛 Bug Fixes | Bug 修复

- 修正 ColPicker 多列选择器 v-model 类型提示使用 Record<string, any>[]实际上的数据是单维数组的问题

### [0.1.53](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.52...v0.1.53) (2023-11-09)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 输入框组件包含无用显示内容的问题

### [0.1.52](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.51...v0.1.52) (2023-11-09)

### ✨ Features | 新功能

- ✨ Input 绑定值为 null 时的警告从 error 改为 warn

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Badge 徽标组件暗黑模式下边框颜色未兼容的问题, closes

### [0.1.51](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.50...v0.1.51) (2023-11-06)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复引入错误依赖的问题

### [0.1.50](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.49...v0.1.50) (2023-11-06)

### ✨ Features | 新功能

- ✨ SidebarItem、TabbarItem、GridItem 组件增加徽标自定义属性 badge-props

### [0.1.49](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.48...v0.1.49) (2023-11-05)

### ✨ Features | 新功能

- ✨ 新增 Sidebar 侧边栏组件

### [0.1.48](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.47...v0.1.48) (2023-11-04)

### ✨ Features | 新功能

- ✨ Input 输入框增加支持微信小程序原生属性 always-embed

### [0.1.47](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.46...v0.1.47) (2023-11-02)

### ✏️ Documentation | 文档

- ✏️ 修复 Image 图片组件演示 demo 样式不友好的问题

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 组件为 textarea 类型时 show-confirm-bar 不生效的问题
- 🐛 img 预览 demo 布局错位

### ✨ Features | 新功能

- ✨ 图片添加圆角大小设置
- ✨ Badge 徽标组件增加 customStyle 自定义样式

### [0.1.46](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.45...v0.1.46) (2023-11-02)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabs 组件在微信小程序端有概率不绘制下划线的问题

### [0.1.45](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.44...v0.1.45) (2023-11-01)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Switch 开关组件自定义大小无效的问题

### [0.1.44](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.43...v0.1.44) (2023-11-01)

### ✨ Features | 新功能

- ✨ 使用 useQueue hook 替换 clickOut 实现关闭多个气泡等组件的功能

### ✏️ Documentation | 文档

- ✏️ 优化演示项目首页样式

### [0.1.43](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.42...v0.1.43) (2023-10-31)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tooltip 文字提示组件微信端关闭按钮样式错误的问题

### [0.1.42](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.41...v0.1.42) (2023-10-31)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Popover、Tooltip 组件展开过程中无法遮盖图片的问题

### [0.1.41](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.40...v0.1.41) (2023-10-31)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Popover、Tooltip 组件展开切换动画不流畅的问题, closes )

### [0.1.40](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.39...v0.1.40) (2023-10-30)

### ✏️ Documentation | 文档

- ✏️ 移除文档中 Search 组件未支持的插槽

### [0.1.39](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.38...v0.1.39) (2023-10-29)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 DateTimePicker 日期选择器组件双向绑定错误的问题

### ✨ Features | 新功能

- ✨ 新增 Table 表格组件
- ✨ Collapse 折叠面板组件增加分割线, closes

### [0.1.38](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.37...v0.1.38) (2023-10-25)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Upload 组件 showLimitNum 属性名拼写错误的问题

### [0.1.37](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.36...v0.1.37) (2023-10-25)

### ✏️ Documentation | 文档

- ✏️ 修复 Tabbar 组件类型警告的问题并优化文档相关链接
- ✏️ issues 模板更新

### [0.1.36](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.35...v0.1.36) (2023-10-21)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabs 指定 name 时双向绑定值仍为 index 的问题, closes

### [0.1.35](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.34...v0.1.35) (2023-10-21)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabs 组件通过 name 匹配时抛出异常的问题, closes

### [0.1.34](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.33...v0.1.34) (2023-10-18)

### ✨ Features | 新功能

- ✨ SelectPicker 单复选选择器增加 scroll-into-view 属性支持定位到选中值, closes

### [0.1.33](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.32...v0.1.33) (2023-10-17)

### ✨ Features | 新功能

- ✨ 新增 Navbar 导航栏组件

### [0.1.32](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.31...v0.1.32) (2023-10-16)

### ✨ Features | 新功能

- ✨ Tabs 组件调整为受控组件, closes

### [0.1.31](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.30...v0.1.31) (2023-10-16)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 wui-popup 组件的 click-modal 方法错误调用的问题

### ✏️ Documentation | 文档

- ✏️ 更新文档中关于组件数量的介绍
- ✏️ 增加 Overlay 遮罩层组件的文档

### [0.1.30](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.29...v0.1.30) (2023-10-14)

### ✨ Features | 新功能

- ✨ 新增 Overlay 遮罩层组件
- ✨ Popup 弹出层组件增加 lock-scroll 属性

### [0.1.29](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.28...v0.1.29) (2023-10-13)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Tabbar 标签栏组件固定底部时不设置 placeholder 情况下仍占据相应空间的问题

### [0.1.28](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.27...v0.1.28) (2023-10-12)

### ✏️ Documentation | 文档

- ✏️ 文档样式优化

### [0.1.27](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.26...v0.1.27) (2023-10-12)

### ⚡ Performance Improvements | 性能优化

- ⚡ Segmented 分段器组件兼容支付宝小程序

### ✏️ Documentation | 文档

- ✏️ 调整文档中图片的 CDN 地址
- ✏️ 修复文档中根节点错写为根结点的问题

### ✨ Features | 新功能

- ✨ 新增 Tabbar 标签栏组件
- ✨ Icon 组件新增图标并支持第三方 iconfont

### [0.1.26](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.25...v0.1.26) (2023-10-10)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Slider 滑块组件双向滑动时右边滑块百分比计算错误的问题

### [0.1.25](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.24...v0.1.25) (2023-10-10)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Silder 滑块组件双向滑动时自定义最大值小于 100 无法滚动到最大值的问题, closes

### [0.1.24](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.23...v0.1.24) (2023-10-10)

### 🐛 Bug Fixes | Bug 修复

- 🐛 优化 Badge 徽标组件超出 max 的显示并修复分段器组件错误依赖的问题

### [0.1.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.22...v0.1.23) (2023-09-28)

### ✨ Features | 新功能

- ✨ 增加 segmented 分段器组件

### [0.1.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.21...v0.1.22) (2023-09-25)

### ✨ Features | 新功能

- ✨ 新增 Swiper 轮播图组件

### [0.1.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.20...v0.1.21) (2023-09-22)

### [0.1.20](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.19...v0.1.20) (2023-09-20)

### ✏️ Documentation | 文档

- ✏️ 恢复展示 Circle 组件的演示 Demo
- ✏️ 文档演示项目 Circle 页面文件调整为大写

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Circle 组件重复创建 canvas 导致警告的问题
- 🐛 修复 Skeleton 骨架屏组件编译到 APP 端异常的问题)
- 🐛 修复 Tag 组件编译到微信小程序平台样式错误的问题)

### [0.1.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.18...v0.1.19) (2023-09-20)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Cell、Grid 组件跳转方法在编译到 H5 端失效的问题)

### ✨ Features | 新功能

- ✨ 新增 Circle 环形进度条组件，支持进度渐变动画

### [0.1.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.17...v0.1.18) (2023-09-19)

### ✏️ Documentation | 文档

- ✏️ README 中增加展示 star-history

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 PickerView 组件选中框被遮盖的问题)

### [0.1.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.16...v0.1.17) (2023-09-19)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Slider 滑块组件最大值和最小值不生效的问题)

### [0.1.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.15...v0.1.16) (2023-09-18)

### ✨ Features | 新功能

- ✨ 新增 WaterMark 水印组件

### [0.1.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.14...v0.1.15) (2023-09-18)

### ✏️ Documentation | 文档

- ✏️ 优化 DateTimePicker 组件关于 time 类型选择器绑定值格式的介绍

### [0.1.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.13...v0.1.14) (2023-09-14)

### ✏️ Documentation | 文档

- ✏️ 增加 QQ 群沟通渠道

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 SelectPicker 单复选选择器单选可搜索状态搜索报错的问题)

### [0.1.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.12...v0.1.13) (2023-09-12)

### ✨ Features | 新功能

- ✨ Tabs 组件增加 animated 属性支持切换动画

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Popover 组件 content 属性必填警告的问题

### [0.1.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.11...v0.1.12) (2023-09-12)

### ✏️ Documentation | 文档

- ✏️ 修复文档中定制主题和反馈组件 404 的问题
- ✏️ 修复 Button 组件文档中 loading 属性重复的问题

### [0.1.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.10...v0.1.11) (2023-09-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复文档中部分页面存在死链问题

### [0.1.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.9...v0.1.10) (2023-09-08)

### ✏️ Documentation | 文档

- ✏️ 将驼峰命名的文档文件改为短横线命名便于爬虫爬取及搜索
- ✏️ 优化 icon 组件文档的体验，支持点击图标复制使用示例

### [0.1.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.8...v0.1.9) (2023-09-08)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 npm 包未配置主入口导致在使用 Hbx 创建的项目中通过 npm 安装编译警告的问题

### [0.1.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.7...v0.1.8) (2023-09-07)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 ActionSheet 等组件在 H5 端隐藏导航栏或在 tabbar 页面高度计算错误的问题
- 🐛 修复 pmpm 安装时 ts 导入类型信息在 H5 平台报错的问题

### [0.1.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.6...v0.1.7) (2023-09-06)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 tabs 组件 change 事件执行两次的问题

### [0.1.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.5...v0.1.6) (2023-09-06)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Input 组件内置变量 showClear 和 showWordCount 定义为 props 的问题
- 🐛 修复 pnpm 安装时运行到 h5 平台 Ref 导入报错的问题

### [0.1.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.4...v0.1.5) (2023-09-05)

### ✏️ Documentation | 文档

- ✏️ 增加 Stickty 和 Tabs 组件关于 H5 端自定义导航栏的 offset-top 的处理方案

### [0.1.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.3...v0.1.4) (2023-09-05)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 CollapseItem 组件在微信小程序中展开/收起时指向图标未跟随转动的问题

### [0.1.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.2...v0.1.3) (2023-09-03)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复通过 npm 安装时配置自动导入 Notify、Toast、Message 组件无法打开的问题

### [0.1.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.1...v0.1.2) (2023-09-03)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复部分 js 引入路径问题

### [0.1.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.0...v0.1.1) (2023-09-02)

## [0.1.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.14...v0.1.0) (2023-09-02)

### ✏️ Documentation | 文档

- ✏️ ConfigProvider 组件演示页面增加手动切换暗黑模式

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Grid 组件不展示 border 的问题
- 🐛 修复 MessageBox 组件取消按钮不展示的问题

### [0.0.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.13...v0.0.14) (2023-09-02)

### ✨ Features | 新功能

- ✨ 优化缺省状态组件 StautsTip，增加支持自定义 url 和图片大小

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 util 中 addUnit 无法处理有单位的字符串的问题

### ✏️ Documentation | 文档

- ✏️ 完善和修复文档中不详细不正确的内容

### [0.0.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.12...v0.0.13) (2023-09-01)

### ✏️ Documentation | 文档

- ✏️ 官网地址迁移至阿里云 oss

### [0.0.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.11...v0.0.12) (2023-08-30)

### [0.0.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.10...v0.0.11) (2023-08-30)

### ✨ Features | 新功能

- ✨ util 工具类提供更好的类型提示

### [0.0.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.9...v0.0.10) (2023-08-27)

### ✨ Features | 新功能

- ✨ 新增 Notify 组件、演示 demo、文档
- ✨ 新增 Skeleton 组件、演示 demo、文档

### [0.0.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.8...v0.0.9) (2023-08-25)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 Cell 单格组件 is-link 不触发 click

### [0.0.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.7...v0.0.8) (2023-08-24)

### ✨ Features | 新功能

- ✨ 演示项目新增用户隐私保护指引的处理
- ✨ ActionSheet 组件调整为使用 v-model 设置显示与隐藏

### [0.0.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.6...v0.0.7) (2023-08-23)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复部分组件某些属性必填警告的问题

### [0.0.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.5...v0.0.6) (2023-08-22)

### [0.0.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.4...v0.0.5) (2023-08-22)

### [0.0.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.3...v0.0.4) (2023-08-21)

### ✨ Features | 新功能

- ✨ Picker 组件优化性能

### [0.0.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.2...v0.0.3) (2023-08-18)

### [0.0.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.1...v0.0.2) (2023-08-18)

### 🐛 Bug Fixes | Bug 修复

- 🐛 修复 CheckBoxGroup 组件的 disabled 属性作用在子组件上失效的问题

### 0.0.1 (2023-08-16)

### ✨ Features | 新功能

- ✨ 适配暗黑模式
- ✨ 新增 50+ 组件
