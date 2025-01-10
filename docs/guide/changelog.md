# 更新日志


## [1.4.0](https://github.com/Moonofweisheng/wot-design-uni/compare/v1.3.14...v1.4.0) (2024-11-24)


### ✨ Features | 新功能

* ✨ Curtain 幕帘组件支持设置 z-index
* ✨ Siderbar 侧边栏添加before-change属性支持异步更新, closes
* ✨ Swiper 支持指定轮播项的文件类型, closes
* ✨ Tab 添加 lazy 属性支持配置是否开启懒加载, closes
* ✨ Tabs 新增 `autoLineWidth` 设置底部条宽度自动同步文本内容' 
* ✨ Tabs 新增map-title属性支持修改导航地图标题, closes
* ✨ Tabs 支持设置徽标, closes
* ✨ tabs支持左对齐, closes


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Collapse 使用 toggleAall 方法时不会触发 before-expand 钩子的问题
* 🐛 修复 CollapseItem 在微信小程序平台使用 title 插槽时宽度无法撑满的问题
* 🐛 修复 DateTimePicker 设置为 time 类型时绑定值无法设置为空数组的问题, closes
* 🐛 修复 FloadingPanel 设置 height 不生效的问题, closes
* 🐛 修复 Slider 滑块处于极值时会遮挡max和min的问题, closes
* 🐛 修复 wd-select-picker 组件单选搜索高亮 class 错误
* 🐛 修复Collapse折叠面板组件内容溢出问题


### ✏️ Documentation | 文档

* ✏️  调整文档中gitee镜像仓库的地址
* ✏️  调整join-group页面加群的问题
* ✏️  添加 Cell 单元格 border 属性的文档, closes
* ✏️  添加关于 Button 自定义样式设置阴影的文档, closes
* ✏️  文档新增演示页面源码和组件源码链接
* ✏️  优化 NoticeBar 垂直滚动示例
* ✏️  增加 Input 字数限制的示例
* ✏️  增加关于Tabs属性autoLineWidth的介绍和最低版本要求

### [1.3.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.13...v1.3.14) (2024-11-09)

### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Curtain 幕帘组件在某些情况下关闭按钮不显示的问题, closes
* 🐛 修复Picker和SelectPicker清空按钮颜色与Input不统一的问题 
* 🐛 修复upload组件header默认值错误的问题, closes 


### ✏️ Documentation | 文档

* ✏️  文档中添加wui-demo的介绍
* ✏️  增加create-uni创建快速上手项目的介绍


### ✨ Features | 新功能

* ✨ 使用Transition重构Popup为center类型的Popup添加zoom-in动画 , closes 
* ✨ 移除Switch默认的size支持在不指定size的情况下使用css变量设置组件尺寸, closes 
* ✨ 优化Toast、Message和Notify组件的函数式调用方案 
* ✨ 支持Button在支付宝小程序平台opentype设为getAuthorize用于获取手机号和用户信息
* ✨ Form 校验规则validator支持传入Error作为校验提示, closes 
* ✨ Loadmore提供loadingProps属性用于自定义loading样式
* ✨ Table 行高支持Number和String类型 

### [1.3.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.12...v1.3.13) (2024-10-25)


### ✏️ Documentation | 文档

* ✏️  快速上手增加vue和uni-app的快速上手链接
* ✏️  添加关于深度选择的介绍
* ✏️  文档新增展示优秀案例
* ✏️  优化文档快速上手章节


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Notice在Tabbar页面时跳转至其他页面导致播放异常的问题并提供reset方法, closes 


### ✨ Features | 新功能

* ✨ 为Picker和SelectPicker补充clear事件
* ✨ 移除 Navbar 点击热区的激活态样式, closes 
* ✨ cell组件border属性以props为最高优先级 
* ✨ picker和selectPicker添加clearable属性
* ✨ Swiper 轮播组件支持展示视频和设置轮播项标题 

### [1.3.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.11...v1.3.12) (2024-10-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Upload文件小程序找不到文件,显示的问题
* 🐛 Radio修复在cell里面高度的问题


### ✏️ Documentation | 文档

* ✏️  优化捐赠榜单中捐赠人链接的展示效果
* ✏️  Upload添加preview-cover最低版本


### ✨ Features | 新功能

* ✨ 新增 FloatingPanel 浮动面板组件, closes
* ✨ 新增支持法语、日语等9 种语言
* ✨ StatusTip缺省提示组件提供图片内容插槽
* ✨ ToolTip 组件 offset 属性支持数组和对象写法, closes
* ✨ Upload新增preview-cover插槽
* ✨Calendar日历添加open事件 ()), closes )

### [1.3.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.10...v1.3.11) (2024-09-23)


### ✏️ Documentation | 文档

* ✏️  移除文档中CountTo不支持的type


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复)产生的使用未定义变量的问题
* 🐛 修复与@uni-helper/uni-typed搭配使用时tsc报类型错误的问题并更新依赖, closes
* 🐛 修复Button设置为hairline时圆角显示异常的问题, closes
* 🐛 修复Input、Textarea未设置labelWidth时通过CSS变量设置label宽度无效的问题, closes
* 🐛 修复loadmore组件属性errorText存在默认值导致国际化失效的问题
* 🐛 修复Radio点击失效的问题, closes
* 🐛确保inputNumber输入值在设定的最小值和最大值之间, closes


### ✨ Features | 新功能

* ✨ 迁移StatusTip组件的图片资源
* ✨ count-to组件添加type属性
* ✨ Fab 悬浮按钮组件支持自定义触发器和控制能否展开, closes
* ✨ Img组件新增属性 show-menu-by-longpress 支持微信小程序长按弹出菜单栏, closes
* ✨ Input、Textarea增加ignoreCompositionEvent属性, closes
* ✨ InputNumber 步进器新增支持adjustPosition属性, closes

### [1.3.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.9...v1.3.10) (2024-09-08)


### ✨ Features | 新功能

* ✨ 新增Keyboard虚拟键盘支持车牌号输入, closes


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 col-picker 点击遮罩关闭执行两次问题
* 🐛 修复wui-upload 关闭按钮受项目行高影响的问题


### ✏️ Documentation | 文档

* ✏️  文档中添加KeyBoard的版本要求
* ✏️  优化多列选择器组件文档

### [1.3.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.8...v1.3.9) (2024-09-01)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复某些场景下wui-textarea属性maxlength无效的问题
* 🐛 修复IndexBar组件更新数据时显示异常的问题, closes
* 🐛 修复Input和Textarea设置为readonly时在部分iOS手机可以点击聚焦的问题, closes
* 🐛 修复Picker多级联动未应用picker选择值时取消后打开展示列数据错误的问题, closes


### ✏️ Documentation | 文档

* ✏️  调整数字滚动组件文档路径
* ✏️  更正form demo 方法名不一致
* ✏️  优化MessageBox示例demo
* ✏️  增加安卓演示demo下载二维码
* ✏️ 更正text组件doc的type属性默认值


### ✨ Features | 新功能

* ✨ config-provider 支持customClass 与 customeStyle
* ✨ Form设置提示模式为toast时优先显示顺序靠前的表单项的错误提示, closes
* ✨ img 图片组件click事件增加mouseEvent参数
* ✨ Text支持传入number类型的text, closes

### [1.3.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.7...v1.3.8) (2024-08-18)


### ✏️ Documentation | 文档

* ✏️  补充Form设置error-type的示例
* ✏️  修复常见问题中useToast入参错误的问题
* ✏️  修复textarea组件的maxlength属性类型标注错误
* ✏️  优化MessageBox和Toast文档中selector的介绍
* ✏️ Toast 文档增加唯一标识selector的介绍


### ✨ Features | 新功能

* ✨ 调整Statistic为CountTo组件并使用useCountDown重构
* ✨ 新增statistic 数值显示
* ✨ Collapse 折叠面板组件支持嵌套使用, closes
* ✨ datetime-picker 增加自定义 Cell 样式属性
* ✨ form表单新增errorType错误提示类型 
* ✨Upload 组件支持手动上传并增加自定义上传函数, closes


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复checkbox-group的shape无法作用到子组件的问题, closes
* 🐛 修复DropDown传入正确direction出现错误警告的问题
* 🐛 修复picker-view动态设置columns时获取选中值异常的问题, closes
* 🐛 修复Textarea组件暗黑模式下清空按钮样式不正确的问题

### [1.3.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.6...v1.3.7) (2024-08-06)


### ✏️ Documentation | 文档

* ✏️  更新爱发电地址和示例demo二维码
* ✏️  更新README
* ✏️  允许文档组件列表折叠收起


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复addUnit工具方法为string类型的参数时未添加单位导致swiper高度丢失的问题
* 🐛 修复Input设置为number类型时绑定值重设为0时显示异常的问题, closes
* 🐛 修复LockScroll后切换页面无法滚动, closes
* 🐛 修复Textarea的placeholder无法设置空字符串问题, closes
* **type:** 🐛 修复vue>=2.7版本的GlobalComponents类型声明问题


### ✨ Features | 新功能

* ✨ 修复Text组件设置color属性后lines失效的问题, closes
* ✨ Input 组件新增clear-triger属性, closes
* ✨ Swiper 轮播组件增加value-key用于自定义目标字段属性名, closes
* ✨ Textarea 组件新增clear-triger属性, closes
* 组件text新增金额类型，前后插槽，下划线等功能
* **drop-menu:** 支持自定义图标以及before-toggle

### [1.3.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.5...v1.3.6) (2024-07-26)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Button为disabled状态时仍能触发open-type指定事件的问题, closes
* 🐛 修复MessageBox设置为prompt时输入框绑定值异常的问题


### ✏️ Documentation | 文档

* ✏️  修复Toast组件文档中关于提示方法描述的错误
* ✏️  修正DateTimePicker文档中关于minDate和maxDate类型标注错误的问题

### [1.3.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.4...v1.3.5) (2024-07-20)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Text组件使用日期工具方法路径错误的问题, closes


### ✏️ Documentation | 文档

* ✏️  文档中全局引入ElTag用于显示组件上线版本
* ✏️  修复RadioBox文档中关于表单模式表述错误的问题
* ✏️  优化Segmented分段器关于绑定激活项的文档

### [1.3.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.3...v1.3.4) (2024-07-19)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复双向滑块响应式丢失
* 🐛 修复Input组件[@input](https://github.com/input)事件参数错误的问题
* 🐛 修复Table组件异步填充数据源无效的问题, closes
* 🐛 修复Upload组件accept为media时图片预览顺序混乱的问题, closes
* 🐛 Button按钮click事件直接透传event, closes
* 修复 textarea 组件同时使用 auto-height 和 no-border 属性时，no-border 属性不生效


### ✨ Features | 新功能

* ✨ Button按钮组件支持使用自定义组件, closes
* ✨ Toast 轻提示组件支持使用组件库内置和自定义图标, closes
* ✨ Upload上传组件新增支持successStatus属性
* 新增Text 文本组件


### ✏️ Documentation | 文档

* ✏️  调整QQ群与提问相关文档
* ✏️  移除示例demo中手机号等字样方便过审

### [1.3.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.2...v1.3.3) (2024-07-14)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复IndexBar索引值显示错误的问题, closes


### ✏️ Documentation | 文档

* ✏️  调整演示demo中图片到npmmirror上
* ✏️  新增关于messageBox弹出多个的常见问题解答
* ✏️  修复SelectPicker文档中存在的拼写错误, closes
* ✏️  Upload文档增加微信隐私协议的介绍

### [1.3.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.1...v1.3.2) (2024-07-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复ActionSheet样式调整导致微信编译错误的问题

### [1.3.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.3.0...v1.3.1) (2024-07-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复暗黑模式下Grid和ActionSheet组件部分样式异常的问题, closes

## [1.3.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.28...v1.3.0) (2024-07-07)


### ✨ Features | 新功能

* ✨ Upload上传组件新增支持上传视频和文件, closes
* ✨select-picker组件增加open、close事件


### ✏️ Documentation | 文档

* ✏️  调整ColPicker多列选择器文档中省市区数据源及演示demo
* ✏️  DropDownItem文档增加closed和opened介绍
* ✏️ PasswordInput 修复示例代码错误的问题


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Calendar等组件暗黑模式部分样式异常的问题, closes
* 🐛 修复IndexBar点击索引序号时未显示预期索引值的问题, closes
* 🐛 修复Swiper在微信端长时间处于后台出现抖动的问题, closes

### [1.2.28](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.27...v1.2.28) (2024-06-24)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复omitBy工具方法实现错误导致Tabbar等组件徽标显示异常的问题

### [1.2.27](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.26...v1.2.27) (2024-06-21)


### ✨ Features | 新功能

* ✨ add title slot for wui-collapse-item, closes


### ✏️ Documentation | 文档

* ✏️  调整文档中关于类型声明文件的配置
* ✏️  Input 密码输入框示例移除disabled属性


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复ActionSheet禁用和加载状态时仍有点击效果的问题, closes
* 🐛 修复Sidebar等组件css变量前缀错误的问题

### [1.2.26](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.25...v1.2.26) (2024-06-14)


### ✨ Features | 新功能

* ✨ fab组件添加gap属性


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Fab初始化时存在初始位置闪现的问题
* 🐛 修复Transition被打断时出现显示异常的问题

### [1.2.25](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.24...v1.2.25) (2024-06-09)


### ✨ Features | 新功能

* ✨ Pickerview选择器新增immediate-change属性，目前微信和支付宝小程序支持。
* ✨ Slider暴露initSlider方法用于外部初始化slider宽度信息, closes


### ✏️ Documentation | 文档

* ✏️  常见问题中增加关于交流群的内容
* ✏️  更新文档中组件数量
* ✏️  增加关于微信小程序v-if和slot执行顺序异常问题的介绍
* ✏️ 修正upload组件文档中change事件的dmeo错误


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复时间选择器设置minDate之后选择器显示值和实际选择值不一致的问题, closes
* 🐛 修复ImgCropper未暴露resetImg和setRoate方法的问题, closes
* 🐛 修复Tag在钉钉小程序平台close方法不执行的问题, closes

### [1.2.24](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.23...v1.2.24) (2024-06-03)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Input支付宝小程序number/digit类型使用maxlength=-1时v-model失效的问题

### [1.2.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.22...v1.2.23) (2024-06-02)


### ✏️ Documentation | 文档

* ✏️  更新LICENSE文件地址
* ✏️  修复loading组件示例代码中文标点符号、img-cropper组件示例代码标签缺失的问题
* update select-picker doc

### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Cell的value为0时无法渲染的问题
* 🐛 修复Sticky在h5和App端缓慢拖动时存在几率始终固定在顶部的问题


### ✨ Features | 新功能

* ✨ 调整Circle环形进度条在微信小程序端使用canvas2d支持同层渲染

### [1.2.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.21...v1.2.22) (2024-05-23)


### ✏️ Documentation | 文档

* ✏️  组件库介绍组件数量调整至70+


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Form指定prop为`a.b`时校验失败的问题

### [1.2.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.20...v1.2.21) (2024-05-20)


### ✨ Features | 新功能

* ✨ 添加索引栏组件
* ✨ img组件添加loading、error插槽
* ✨ skeleton添加默认内容插槽
* add backtop


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Cell组件单独使用时设置border无效的问题
* 🐛 修复Picker选择器多列选择模式绑定值为空数组时将列第一项作为显示值的问题
* 🐛 修复Sticky吸顶组件在微信小程序中放置在页面顶部时吸顶失效的问题, closes
* 修复wui-button在自定义样式时激活态样式问题


### ✏️ Documentation | 文档

* ✏️  常见问题增加关于useToast等hooks的答疑以及自定义编译平台的内容
* ✏️  文档中增加解释导入方式的faq

### [1.2.20](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.19...v1.2.20) (2024-05-12)


### ✏️ Documentation | 文档

* ✏️  调整捐赠榜单和友情链接的数据到cloudflare上
* ✏️  推荐文档地址调整至cloudflare
* ✏️  Curtain组件width属性标记为number类型, closes


### ✨ Features | 新功能

* Segmented组件添加click事件


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复MessageBox中使用TextArea字数统计样式错误的问题, closes
* 🐛 修复PickerView可以滚动到禁用选项的问题, closes
* 🐛 修复Popover指定placement后箭头显示异常的问题
* 🐛 修复release脚本处理最低版本号问题
* 🐛 修复Sticky组件获取节点错误的问题
* 修复wui-calendar未抛出事件

### [1.2.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.18...v1.2.19) (2024-05-01)


### ✨ Features | 新功能

* ✨ `Slider`组件`min`值允许负数, closes
* ✨ fab添加draggable属性
* ✨ table组件添加index参数


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复`slider`组件`step`属性无效问题, closes
* 🐛 修复Cell组件title文字对齐方式受外部影响的问题, closes
* 🐛 修复SelectPicker无默认值时仍会查找选择项节点的问题, closes
* 🐛 修复Slider组件max和min变化时滑块和进度条未更新的问题


### ✏️ Documentation | 文档

* ✏️  补充Table组件关于Events的介绍, closes

### [1.2.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.17...v1.2.18) (2024-04-23)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复InputNumber步进器组件在初始化时未发生变化仍触发change的问题
* 🐛 修复InputNumber的change事件无法取到当前绑定值的更新的问题

### [1.2.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.16...v1.2.17) (2024-04-18)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复debounce调整后导致tabs无法切换的问题

### [1.2.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.15...v1.2.16) (2024-04-17)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Gap组件文档中safeAreaBottom属性名错误的问题
* 🐛 修复PickerView在绑定值为0时无法生效的问题


### ✏️ Documentation | 文档

* ✏️  补充Img图片支持图片预览的最低支持版本, closes


### ✨ Features | 新功能

* ✨ 阻止tag的关闭和新增事件冒泡
* ✨ Checkbox 新增toggle方法, closes
* ✨ date-time-picker-view 添加年选择
* ✨ Noticebar 通知栏新增支持click点击事件
* ✨ TableColumn组件value插槽新增index参数

### [1.2.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.14...v1.2.15) (2024-04-11)


### ✏️ Documentation | 文档

* ✏️ 优化文档及演示demo访问速度


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Button不同尺寸显示固定尺寸icon样式不协调的问题, closes
* 🐛 修复Upload自定义上传样式时未应用limit数量限制和customEvokeClass的问题


### ✨ Features | 新功能

* ✨ MessageBox支持确认前置处理钩子beforeConfirm, closes
* ✨ Toast轻提示增加opened、closed两个钩子

### [1.2.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.13...v1.2.14) (2024-04-09)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复NoticeBar通知栏在小程序端垂直滚动无效的问题

### [1.2.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.12...v1.2.13) (2024-04-08)


### ✏️ Documentation | 文档

* ✏️  demo首页使用Cell组件重构显示样式


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复升级vue到3.4.2.之后defineEmits位置不规范导致访问'emit'报错的问题, closes
* 🐛 修复NumberKeyboard暗黑模式无效的问题
* 🐛 修复Upload组件sourceType属性丢失默认值导致在iOS系统微信小程序报错的问题, closes

### [1.2.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.11...v1.2.12) (2024-04-07)


### ✨ Features | 新功能

* ✨ 增强`notice-bar`组件`vertical`模式下插槽的功能
* ✨ NumberKeyboard数字键盘增加名为title的插槽, closes
* ✨ StatusTip缺省提示组件新增支持图片mode和自定义图片宽高
* ✨ Swiper轮播为image-mode增加ts类型标注


### 🐛 Bug Fixes | Bug 修复

* 修复 step 的 description 插槽不显示的bug


### ✏️ Documentation | 文档

* ✏️  调整演示demo iframe加载完成后再同步当前是否暗黑模式, closes
* ✏️  Steps步骤条增加控制进度的示例

### [1.2.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.10...v1.2.11) (2024-04-06)


### ⚡ Performance Improvements | 性能优化

* ⚡ 优化Calendar日历选择器打开关闭时的动画效果


### ✏️ Documentation | 文档

* ✏️  `notice-bar`组件补充`event`事件
* ✏️  优化文档与演示demo同步暗黑模式的逻辑, closes


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复ActionSheet丢失props默认值的问题
* 🐛 修复Calendar部分文字运行时切换国际化未应用国际化文字的问题
* 🐛 修复Calendar的type为datetime且无默认值时无法在首次选择日期后选择时间的问题, closes
* 🐛 修复search组件suffix插槽无法使用的问题


### ✨ Features | 新功能

* ✨ `notice-bar`增加垂直滚动功能, closes
* ✨ `notice-bar`增加多文本轮播功能
* ✨ `upload`组件增加`mode`属性传递给预览`image`, closes
* ✨ img组件的mode属性增加类型`ImageMode`
* ✨ img组件增加enable-preview属性来支持点击预览功能, closes
* ✨ swiper组件增加current属性控制轮播项功能, closes

### [1.2.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.9...v1.2.10) (2024-04-02)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Step组件description插槽无法使用的问题
* 🐛 修复Toast、MessageBox二次打开时部分参数未重置的问题


### ✨ Features | 新功能

* ✨ 为所有组件补充customStyle属性, closes


### ✏️ Documentation | 文档

* ✏️  更新vitepress至1.0.1
* ✏️  修复更新vitepress至1.0.1后友情链接丢失logo的问题
* ✏️  Steps文档标题调整为步骤条

### [1.2.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.8...v1.2.9) (2024-04-01)


### ✨ Features | 新功能

* ✨ Segmented分段器change事件参数类型扩充为SegmentedOption, closes

### [1.2.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.7...v1.2.8) (2024-03-30)


### 🐛 Bug Fixes | Bug 修复

* 修复useLocale 不传 message 会丢失原有语言配置的问题


### ✨ Features | 新功能

* ✨ SelectPicker单选模式支持自动完成, closes


### ✏️ Documentation | 文档

* ✏️  文档中增加@uni-helper/vite-plugin-uni-components的使用提示

### [1.2.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.6...v1.2.7) (2024-03-29)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复DatePicker占位符展示缺失的问题
* 🐛 修复DateTimePicker区域选择极值计算错误的问题
* 🐛 修复picker-view初始化报错的问题, closes
* 🐛 修复picker选择器在APP端包装二维数组逻辑错误导致无法实现多列选择器的问题
* 🐛 移除文件移动时volar变更文件路径错误导致.vue文件中多出的无用路径字符串

### [1.2.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.5...v1.2.6) (2024-03-27)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Picker 未选择时显示第一列值的问题
* 🐛 修复DatetimePicker区间模式未选值时显示占位符错误的问题

### [1.2.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.4...v1.2.5) (2024-03-24)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复textarea在支付宝小程序上清除按钮点击热区失效的问题

### [1.2.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.3...v1.2.4) (2024-03-23)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复textarea、input的label存在icon时高度异常的问题
* 🐛 修复textarea无法换行的问题


### ✏️ Documentation | 文档

* ✏️  调整组件库基于vite配置自动引入组件的介绍
* ✏️  增加steps设置激活项的介绍

### [1.2.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.2...v1.2.3) (2024-03-20)


### ✏️ Documentation | 文档

* ✏️  修复部分外部链接不可用的问题


### 🐛 Bug Fixes | Bug 修复

* 修复 checkbox 单独使用时无法切换选中状态的问题

### [1.2.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.1...v1.2.2) (2024-03-19)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复picker选择器绑定值value值为0时无法生效的问题, closes

### [1.2.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.2.0...v1.2.1) (2024-03-19)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复部分可为null的props丢失null类型的问题

## [1.2.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.10...v1.2.0) (2024-03-19)


### ✨ Features | 新功能

* ✨ typescript类型支持增强

### [1.1.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.9...v1.1.10) (2024-03-15)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复tabbar默认shape固定底部安全区无遮挡的问题

### [1.1.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.8...v1.1.9) (2024-03-11)


### ✏️ Documentation | 文档

* ✏️  推荐使用托管在gitee上的文档地址


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复textarea在微信小程序平台下部分安卓手机maxlength不生效的问题

### [1.1.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.7...v1.1.8) (2024-03-10)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复transitiont打开后立即关闭时无法关闭的问题

### [1.1.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.6...v1.1.7) (2024-03-09)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复badge组件多出一个script标签的问题, closes

### [1.1.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.5...v1.1.6) (2024-03-06)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Tabar为round类型时开启safeAreaInsetBottom是样式异常的问题

### [1.1.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.4...v1.1.5) (2024-03-05)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Search、Input等组件clear事件在value变更前触发的问题, closes


### ✏️ Documentation | 文档

* ✏️  首页增加常见问题的入口

### [1.1.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.3...v1.1.4) (2024-03-04)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Navbar显示下边框时fixed不生效的问题


### ✏️ Documentation | 文档

* ✏️  增加支付宝小程序styleIsolation配置的文档

### [1.1.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.2...v1.1.3) (2024-03-03)


### ✏️ Documentation | 文档

* ✏️  文档中增加提问的智慧和toast、message组件的常见问题

### [1.1.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.1...v1.1.2) (2024-03-01)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Button会存在一个默认border的问题

### [1.1.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.1.0...v1.1.1) (2024-02-29)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 ImgCropper 在钉钉小程序平台无法展示所选图片的问题
* 🐛 修复微信小程序css使用标签选择器抛出警告的问题（wui-img）

## [1.1.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v1.0.0...v1.1.0) (2024-02-27)


### ✨ Features | 新功能

* ✨ Button 支持微信小程序chooseavatar和agreeprivacyauthorization事件
* ✨ DropDown组件支持钉钉小程序
* ✨ Slider 支持钉钉小程序


### ✏️ Documentation | 文档

* ✏️  新增支持钉钉小程序平台
* ✏️  修复Segment演示demo在钉钉小程序平台展示异常的问题
* ✏️  支持平台的介绍中新增支付宝小程序

## [1.0.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.1...v1.0.0) (2024-02-26)


### ✨ Features | 新功能

* ✨ 支持支付宝小程序并提供ConfigProvider的便利性优化
* ✨ sticky组件支持支付宝平台


### ✏️ Documentation | 文档

* ✏️  演示demo增加组件库版本号的显示

### [0.3.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.3.0...v0.3.1) (2024-02-26)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复大尺寸checkbox选中样式异常的问题

## [0.3.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.23...v0.3.0) (2024-02-21)


### ✨ Features | 新功能

* ✨ 调整Button 按钮样式受主色控制并优化幽灵按钮显示效果


### ✏️ Documentation | 文档

* ✏️  修复select-picker组件绑定值描述错误的问题, closes
* ✏️  增加Button细边框幽灵按钮的使用说明

### [0.2.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.22...v0.2.23) (2024-02-07)


### ✏️ Documentation | 文档

* ✏️  文档支持显示友情链接
* ✏️  友情链接支持来自线上配置


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 MessageBox 国际化不生效的问题, closes

### [0.2.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.21...v0.2.22) (2024-01-30)


### ✏️ Documentation | 文档

* ✏️  修正 Popover 组件文档中menuclick示例错误的问题

### [0.2.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.19...v0.2.21) (2024-01-28)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Dropdown 组件点击已展开项时无法关闭的问题


### ✨ Features | 新功能

* ✨ 支持国际化

### [0.2.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.18...v0.2.19) (2024-01-25)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Input 绑定值无法为null的问题
* 🐛 修复多列、单复选选择器列更新时显示值未更新的问题, closes

### [0.2.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.17...v0.2.18) (2024-01-24)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 CheckBox 组件的选中色无法应用到css变量的问题
* 🐛 修复 Radio 组件的选中色无法应用到css变量的问题

### [0.2.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.16...v0.2.17) (2024-01-23)


### ✨ Features | 新功能

* ✨ Form 表单组件提供开关控制是否model变化时重置提示信息, closes

### [0.2.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.15...v0.2.16) (2024-01-21)


### ✏️ Documentation | 文档

* ✏️  修复文档中关于日期选择器最大日期描述错误的问题

### [0.2.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.14...v0.2.15) (2024-01-15)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tab class类名属性错误的问题


### ✏️ Documentation | 文档

* ✏️  修复 Upload 文档中before-upload钩子参数描述错误的问题

### [0.2.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.13...v0.2.14) (2024-01-14)


### ✨ Features | 新功能

* ✨ InputNumber步进器支持禁用输入框

### [0.2.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.12...v0.2.13) (2024-01-12)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复演示文档刷新后指向localhost的问题

### [0.2.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.11...v0.2.12) (2024-01-11)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabbar 错误地抛出提示信息的问题


### ✏️ Documentation | 文档

* ✏️  增加 Circle 组件使用插槽的示例
* ✏️  增加展示gitee的star徽标

### [0.2.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.10...v0.2.11) (2024-01-09)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Overlay 类型声明错误的问题


### ✏️ Documentation | 文档

* ✏️  提供托管在Giteee上的文档网站

### [0.2.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.9...v0.2.10) (2024-01-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 col-picker 暗黑模式下标题文字颜色不清楚的问题
* 🐛 修复 steps 组件自定义图标显示异常的问题
* 🐛 修复支付宝小程序暗黑模式下 Input、Textarea 组件显示异常的问题

### [0.2.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.8...v0.2.9) (2024-01-07)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 col-picker 组件首次打开指示线位置异常的问题

### [0.2.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.7...v0.2.8) (2024-01-06)


### ✏️ Documentation | 文档

* ✏️  展示netlify支持

### [0.2.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.5...v0.2.7) (2024-01-06)


### ✨ Features | 新功能

* ✨ 优化provide/inject的使用方式


### ✏️ Documentation | 文档

* ✏️  文档网站增加自定义footer
* ✏️  修复vitepress自定义footer展示错误的问题

### [0.2.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.5...v0.2.6) (2024-01-06)


### ✨ Features | 新功能

* ✨ 优化provide/inject的使用方式


### ✏️ Documentation | 文档

* ✏️  文档网站增加自定义footer

### [0.2.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.4...v0.2.5) (2023-12-28)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Form 导入FormRules、ErrorMessage时未指定为type的问题
* 🐛 修复 SwipeAction 组件在H5端导致页面无法上下滚动的问题, closes

### [0.2.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.3...v0.2.4) (2023-12-27)

### [0.2.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.2...v0.2.3) (2023-12-27)


### ✏️ Documentation | 文档

* ✏️  修复动态表单演示页面标题错误的问题

### [0.2.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.1...v0.2.2) (2023-12-26)


### 🐛 Bug Fixes | Bug 修复

* 🐛 移除 Swiper 的list中不必填的属性


### ✏️ Documentation | 文档

* ✏️  修复 Textarea 文档示例错误的问题
* ✏️  优化 Form 相关组件的文档介绍

### [0.2.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.2.0...v0.2.1) (2023-12-25)


### ✏️ Documentation | 文档

* ✏️  PassowrdInput 密码输入框组件增加文档标题

## [0.2.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.70...v0.2.0) (2023-12-24)


### ✨ Features | 新功能

* ✨ 新增 Form 表单组件
* ✨ 新增 PasswordInput 密码输入框
* ✨ 新增 textarea 文本域组件
* ✨ 增加父子组件 Provide/Inject 的hooks


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Input 组件在支付宝平台存在一个默认padding的问题


### ✏️ Documentation | 文档

* ✏️  调整主题定制相关文档
* ✏️  增加 textarea 文本域组件功能的迁移说明
* ✏️  PasswordInput 密码输入框文档增加版本介绍

### [0.1.70](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.69...v0.1.70) (2023-12-23)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 picker 的列value为0时回显异常的问题, closes

### [0.1.69](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.68...v0.1.69) (2023-12-13)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Notify 使用文档错误的问题, closes

### [0.1.68](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.67...v0.1.68) (2023-12-07)


### ✏️ Documentation | 文档

* ✏️  增加 Gap 组件的文档

### [0.1.67](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.66...v0.1.67) (2023-12-06)


### ✨ Features | 新功能

* ✨ 新增 Gap 间隔槽组件


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Picker组件v-model数据不更新的问题, closes

### [0.1.66](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.65...v0.1.66) (2023-12-01)


### ✨ Features | 新功能

* ✨ Tag 组件type增加属性值default


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 ActionSheet 组件设置custom-class无效的问题

### [0.1.65](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.64...v0.1.65) (2023-11-29)


### ✨ Features | 新功能

* ✨ 新增 NumberKeyboard 数字键盘组件
* Tag新增类型标签添加slot


### ✏️ Documentation | 文档

* ✏️  新增关于 Tag 组件的add插槽的介绍

### [0.1.64](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.63...v0.1.64) (2023-11-25)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复DateTimePicker标题展示和模式为区间时before-confirm参数错误的问题

### [0.1.63](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.62...v0.1.63) (2023-11-23)


### ✨ Features | 新功能

* ✨ CountDown 倒计时组件支持custom-class和custom-style
* ✨ Search 搜索组件支持自动聚焦和清空后自动聚焦


### ✏️ Documentation | 文档

* ✏️  修复文档中config-provider等页面的错误

### [0.1.62](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.61...v0.1.62) (2023-11-22)


### ✨ Features | 新功能

* ✨ Badge 徽标组件支持控制是否显示0值
* ✨ Upload 上传组件支持h5端获取文件后缀名


### ✏️ Documentation | 文档

* ✏️  优化 Upload 文档中关于云存储内容的样式

### [0.1.61](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.60...v0.1.61) (2023-11-20)


### ✏️ Documentation | 文档

* ✏️  修复 Tag 标签组件文档错乱的问题
* ✏️  ImgCropper 组件演示页面增加微信小程序隐私协议弹框


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Calendar 日历组件存在未定义属性导致警告的问题
* 🐛 修复 CountDown 倒计时组件文档手动控制示例错误的问题
* 🐛 修复 SelectPicker 组件loading状态仍可以滚动的问题


### ✨ Features | 新功能

* ✨ Upload 上传组件支持上传至云存储

### [0.1.60](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.59...v0.1.60) (2023-11-20)


### ✏️ Documentation | 文档

* ✏️  修复 CountDown 倒计时组件默认slot用法的介绍错误的问题

### [0.1.59](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.58...v0.1.59) (2023-11-19)

### [0.1.58](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.57...v0.1.58) (2023-11-19)


### ✨ Features | 新功能

* ✨ 新增 CountDown 倒计时组件
* ✨ CountDown 倒计时组件支持小程序

### [0.1.57](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.56...v0.1.57) (2023-11-17)


### ✨ Features | 新功能

* ✨ 新增 Fab 悬浮动作按钮组件


### ✏️ Documentation | 文档

* ✏️  修复 Cell 组件点击反馈的介绍错误的问题


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Table 表格组件数字英文换行失效的问题

### [0.1.56](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.55...v0.1.56) (2023-11-12)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabbar 标签栏组件 bordered 属性无效的问题

### [0.1.55](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.54...v0.1.55) (2023-11-12)


### 🐛 Bug Fixes | Bug 修复

* 修正README.md 中[贡献指南]链接错误，跳转失败的问题。


### ✨ Features | 新功能

* ✨ Swiper 轮播图组件增加imageMode属性支持自定义图片裁剪缩放模式

### [0.1.54](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.53...v0.1.54) (2023-11-10)


### 🐛 Bug Fixes | Bug 修复

* 修正ColPicker多列选择器v-model类型提示使用Record<string, any>[]实际上的数据是单维数组的问题

### [0.1.53](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.52...v0.1.53) (2023-11-09)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Input 输入框组件包含无用显示内容的问题

### [0.1.52](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.51...v0.1.52) (2023-11-09)


### ✨ Features | 新功能

* ✨ Input绑定值为null时的警告从error改为warn


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Badge 徽标组件暗黑模式下边框颜色未兼容的问题, closes

### [0.1.51](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.50...v0.1.51) (2023-11-06)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复引入错误依赖的问题

### [0.1.50](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.49...v0.1.50) (2023-11-06)


### ✨ Features | 新功能

* ✨ SidebarItem、TabbarItem、GridItem组件增加徽标自定义属性badge-props

### [0.1.49](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.48...v0.1.49) (2023-11-05)


### ✨ Features | 新功能

* ✨ 新增 Sidebar 侧边栏组件

### [0.1.48](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.47...v0.1.48) (2023-11-04)


### ✨ Features | 新功能

* ✨ Input 输入框增加支持微信小程序原生属性always-embed

### [0.1.47](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.46...v0.1.47) (2023-11-02)


### ✏️ Documentation | 文档

* ✏️  修复 Image 图片组件演示demo样式不友好的问题


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Input 组件为textarea类型时show-confirm-bar不生效的问题
* 🐛 img 预览demo布局错位


### ✨ Features | 新功能

* ✨ 图片添加圆角大小设置
* ✨ Badge 徽标组件增加customStyle自定义样式

### [0.1.46](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.45...v0.1.46) (2023-11-02)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabs 组件在微信小程序端有概率不绘制下划线的问题

### [0.1.45](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.44...v0.1.45) (2023-11-01)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Switch 开关组件自定义大小无效的问题

### [0.1.44](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.43...v0.1.44) (2023-11-01)


### ✨ Features | 新功能

* ✨ 使用 useQueue hook替换clickOut实现关闭多个气泡等组件的功能


### ✏️ Documentation | 文档

* ✏️  优化演示项目首页样式

### [0.1.43](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.42...v0.1.43) (2023-10-31)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tooltip 文字提示组件微信端关闭按钮样式错误的问题

### [0.1.42](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.41...v0.1.42) (2023-10-31)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Popover、Tooltip 组件展开过程中无法遮盖图片的问题

### [0.1.41](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.40...v0.1.41) (2023-10-31)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Popover、Tooltip 组件展开切换动画不流畅的问题, closes )

### [0.1.40](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.39...v0.1.40) (2023-10-30)


### ✏️ Documentation | 文档

* ✏️  移除文档中 Search 组件未支持的插槽

### [0.1.39](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.38...v0.1.39) (2023-10-29)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 DateTimePicker 日期选择器组件双向绑定错误的问题


### ✨ Features | 新功能

* ✨ 新增 Table 表格组件
* ✨ Collapse 折叠面板组件增加分割线, closes

### [0.1.38](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.37...v0.1.38) (2023-10-25)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Upload 组件showLimitNum属性名拼写错误的问题

### [0.1.37](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.36...v0.1.37) (2023-10-25)


### ✏️ Documentation | 文档

* ✏️  修复Tabbar组件类型警告的问题并优化文档相关链接
* ✏️  issues 模板更新

### [0.1.36](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.35...v0.1.36) (2023-10-21)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabs 指定name时双向绑定值仍为index的问题, closes

### [0.1.35](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.34...v0.1.35) (2023-10-21)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabs 组件通过name匹配时抛出异常的问题, closes

### [0.1.34](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.33...v0.1.34) (2023-10-18)


### ✨ Features | 新功能

* ✨ SelectPicker 单复选选择器增加 scroll-into-view 属性支持定位到选中值, closes

### [0.1.33](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.32...v0.1.33) (2023-10-17)


### ✨ Features | 新功能

* ✨ 新增 Navbar 导航栏组件

### [0.1.32](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.31...v0.1.32) (2023-10-16)


### ✨ Features | 新功能

* ✨ Tabs 组件调整为受控组件, closes

### [0.1.31](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.30...v0.1.31) (2023-10-16)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复wui-popup组件的click-modal方法错误调用的问题


### ✏️ Documentation | 文档

* ✏️  更新文档中关于组件数量的介绍
* ✏️  增加 Overlay 遮罩层组件的文档

### [0.1.30](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.29...v0.1.30) (2023-10-14)


### ✨ Features | 新功能

* ✨ 新增 Overlay 遮罩层组件
* ✨ Popup 弹出层组件增加 lock-scroll 属性

### [0.1.29](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.28...v0.1.29) (2023-10-13)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Tabbar 标签栏组件固定底部时不设置placeholder情况下仍占据相应空间的问题

### [0.1.28](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.27...v0.1.28) (2023-10-12)


### ✏️ Documentation | 文档

* ✏️  文档样式优化

### [0.1.27](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.26...v0.1.27) (2023-10-12)


### ⚡ Performance Improvements | 性能优化

* ⚡ Segmented 分段器组件兼容支付宝小程序


### ✏️ Documentation | 文档

* ✏️  调整文档中图片的CDN地址
* ✏️  修复文档中根节点错写为根结点的问题


### ✨ Features | 新功能

* ✨ 新增 Tabbar 标签栏组件
* ✨ Icon 组件新增图标并支持第三方iconfont

### [0.1.26](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.25...v0.1.26) (2023-10-10)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Slider 滑块组件双向滑动时右边滑块百分比计算错误的问题

### [0.1.25](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.24...v0.1.25) (2023-10-10)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Silder 滑块组件双向滑动时自定义最大值小于100无法滚动到最大值的问题, closes

### [0.1.24](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.23...v0.1.24) (2023-10-10)


### 🐛 Bug Fixes | Bug 修复

* 🐛 优化 Badge 徽标组件超出max的显示并修复分段器组件错误依赖的问题

### [0.1.23](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.22...v0.1.23) (2023-09-28)


### ✨ Features | 新功能

* ✨ 增加 segmented 分段器组件

### [0.1.22](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.21...v0.1.22) (2023-09-25)


### ✨ Features | 新功能

* ✨ 新增 Swiper 轮播图组件

### [0.1.21](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.20...v0.1.21) (2023-09-22)

### [0.1.20](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.19...v0.1.20) (2023-09-20)


### ✏️ Documentation | 文档

* ✏️  恢复展示 Circle 组件的演示Demo
* ✏️  文档演示项目 Circle 页面文件调整为大写


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Circle 组件重复创建canvas导致警告的问题
* 🐛 修复 Skeleton 骨架屏组件编译到APP端异常的问题)
* 🐛 修复 Tag 组件编译到微信小程序平台样式错误的问题)

### [0.1.19](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.18...v0.1.19) (2023-09-20)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Cell、Grid 组件跳转方法在编译到H5端失效的问题)


### ✨ Features | 新功能

* ✨ 新增 Circle 环形进度条组件，支持进度渐变动画

### [0.1.18](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.17...v0.1.18) (2023-09-19)


### ✏️ Documentation | 文档

* ✏️  README中增加展示 star-history


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 PickerView 组件选中框被遮盖的问题)

### [0.1.17](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.16...v0.1.17) (2023-09-19)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复 Slider 滑块组件最大值和最小值不生效的问题)

### [0.1.16](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.15...v0.1.16) (2023-09-18)


### ✨ Features | 新功能

* ✨ 新增 WaterMark 水印组件

### [0.1.15](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.14...v0.1.15) (2023-09-18)


### ✏️ Documentation | 文档

* ✏️  优化DateTimePicker组件关于time类型选择器绑定值格式的介绍

### [0.1.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.13...v0.1.14) (2023-09-14)


### ✏️ Documentation | 文档

* ✏️  增加QQ群沟通渠道


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复SelectPicker 单复选选择器单选可搜索状态搜索报错的问题)

### [0.1.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.12...v0.1.13) (2023-09-12)


### ✨ Features | 新功能

* ✨ Tabs组件增加animated属性支持切换动画


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Popover组件content属性必填警告的问题

### [0.1.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.11...v0.1.12) (2023-09-12)


### ✏️ Documentation | 文档

* ✏️  修复文档中定制主题和反馈组件404的问题
* ✏️  修复Button组件文档中loading属性重复的问题

### [0.1.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.10...v0.1.11) (2023-09-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复文档中部分页面存在死链问题

### [0.1.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.9...v0.1.10) (2023-09-08)


### ✏️ Documentation | 文档

* ✏️  将驼峰命名的文档文件改为短横线命名便于爬虫爬取及搜索
* ✏️  优化icon组件文档的体验，支持点击图标复制使用示例

### [0.1.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.8...v0.1.9) (2023-09-08)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复npm包未配置主入口导致在使用Hbx创建的项目中通过npm安装编译警告的问题

### [0.1.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.7...v0.1.8) (2023-09-07)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复ActionSheet等组件在H5端隐藏导航栏或在tabbar页面高度计算错误的问题
* 🐛 修复pmpm安装时ts导入类型信息在H5平台报错的问题

### [0.1.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.6...v0.1.7) (2023-09-06)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复tabs组件change事件执行两次的问题

### [0.1.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.5...v0.1.6) (2023-09-06)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Input组件内置变量showClear和showWordCount定义为props的问题
* 🐛 修复pnpm安装时运行到h5平台Ref导入报错的问题

### [0.1.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.4...v0.1.5) (2023-09-05)


### ✏️ Documentation | 文档

* ✏️  增加Stickty和Tabs组件关于H5端自定义导航栏的offset-top的处理方案

### [0.1.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.3...v0.1.4) (2023-09-05)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复CollapseItem组件在微信小程序中展开/收起时指向图标未跟随转动的问题

### [0.1.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.2...v0.1.3) (2023-09-03)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复通过npm安装时配置自动导入Notify、Toast、Message组件无法打开的问题

### [0.1.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.1...v0.1.2) (2023-09-03)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复部分js引入路径问题

### [0.1.1](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.1.0...v0.1.1) (2023-09-02)

## [0.1.0](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.14...v0.1.0) (2023-09-02)


### ✏️ Documentation | 文档

* ✏️  ConfigProvider组件演示页面增加手动切换暗黑模式


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Grid组件不展示border的问题
* 🐛 修复MessageBox组件取消按钮不展示的问题

### [0.0.14](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.13...v0.0.14) (2023-09-02)


### ✨ Features | 新功能

* ✨ 优化缺省状态组件StautsTip，增加支持自定义url和图片大小


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复util中addUnit无法处理有单位的字符串的问题


### ✏️ Documentation | 文档

* ✏️  完善和修复文档中不详细不正确的内容

### [0.0.13](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.12...v0.0.13) (2023-09-01)


### ✏️ Documentation | 文档

* ✏️  官网地址迁移至阿里云oss

### [0.0.12](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.11...v0.0.12) (2023-08-30)

### [0.0.11](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.10...v0.0.11) (2023-08-30)


### ✨ Features | 新功能

* ✨ util工具类提供更好的类型提示

### [0.0.10](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.9...v0.0.10) (2023-08-27)


### ✨ Features | 新功能

* ✨ 新增Notify组件、演示demo、文档
* ✨ 新增Skeleton组件、演示demo、文档

### [0.0.9](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.8...v0.0.9) (2023-08-25)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复Cell 单格组件 is-link 不触发 click

### [0.0.8](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.7...v0.0.8) (2023-08-24)


### ✨ Features | 新功能

* ✨ 演示项目新增用户隐私保护指引的处理
* ✨ ActionSheet组件调整为使用v-model设置显示与隐藏

### [0.0.7](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.6...v0.0.7) (2023-08-23)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复部分组件某些属性必填警告的问题

### [0.0.6](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.5...v0.0.6) (2023-08-22)

### [0.0.5](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.4...v0.0.5) (2023-08-22)

### [0.0.4](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.3...v0.0.4) (2023-08-21)


### ✨ Features | 新功能

* ✨ Picker组件优化性能

### [0.0.3](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.2...v0.0.3) (2023-08-18)

### [0.0.2](https://github.com/zhangyao1990/elegant-wui-uni/compare/v0.0.1...v0.0.2) (2023-08-18)


### 🐛 Bug Fixes | Bug 修复

* 🐛 修复CheckBoxGroup组件的disabled属性作用在子组件上失效的问题

### 0.0.1 (2023-08-16)


### ✨ Features | 新功能

* ✨ 适配暗黑模式
* ✨ 新增 50+ 组件
