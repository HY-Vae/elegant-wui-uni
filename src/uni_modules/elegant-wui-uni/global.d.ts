declare module 'vue' {
  // Helper for Volar
  export interface GlobalComponents {
    WuiActionSheet: typeof import('./components/wui-action-sheet/wui-action-sheet.vue')['default']
    WuiBadge: typeof import('./components/wui-badge/wui-badge.vue')['default']
    WuiButton: typeof import('@/uni_modules/elegant-wui-uni/components/wui-button/wui-button.vue')['default']
    WuiCalendar: typeof import('./components/wui-calendar/wui-calendar.vue')['default']
    WuiCalendarView: typeof import('./components/wui-calendar-view/wui-calendar-view.vue')['default']
    WuiCard: typeof import('./components/wui-card/wui-card.vue')['default']
    WuiCell: typeof import('./components/wui-cell/wui-cell.vue')['default']
    WuiCellGroup: typeof import('./components/wui-cell-group/wui-cell-group.vue')['default']
    WuiCheckbox: typeof import('./components/wui-checkbox/wui-checkbox.vue')['default']
    WuiCheckboxGroup: typeof import('./components/wui-checkbox-group/wui-checkbox-group.vue')['default']
    WuiCol: typeof import('./components/wui-col/wui-col.vue')['default']
    WuiColPicker: typeof import('./components/wui-col-picker/wui-col-picker.vue')['default']
    WuiCollapse: typeof import('./components/wui-collapse/wui-collapse.vue')['default']
    WuiCollapseItem: typeof import('./components/wui-collapse-item/wui-collapse-item.vue')['default']
    WuiConfigProvider: typeof import('./components/wui-config-provider/wui-config-provider.vue')['default']
    WuiCurtain: typeof import('./components/wui-curtain/wui-curtain.vue')['default']
    WuiDatetimePicker: typeof import('./components/wui-datetime-picker/wui-datetime-picker.vue')['default']
    WuiDatetimePickerView: typeof import('./components/wui-datetime-picker-view/wui-datetime-picker-view.vue')['default']
    WuiDivider: typeof import('./components/wui-divider/wui-divider.vue')['default']
    WuiDropMenu: typeof import('./components/wui-drop-menu/wui-drop-menu.vue')['default']
    WuiDropMenuItem: typeof import('./components/wui-drop-menu-item/wui-drop-menu-item.vue')['default']
    WuiGrid: typeof import('./components/wui-grid/wui-grid.vue')['default']
    WuiGridItem: typeof import('./components/wui-grid-item/wui-grid-item.vue')['default']
    WuiIcon: typeof import('./components/wui-icon/wui-icon.vue')['default']
    WuiImg: typeof import('./components/wui-img/wui-img.vue')['default']
    WuiImgCropper: typeof import('./components/wui-img-cropper/wui-img-cropper.vue')['default']
    WuiInput: typeof import('./components/wui-input/wui-input.vue')['default']
    WuiInputNumber: typeof import('./components/wui-input-number/wui-input-number.vue')['default']
    WuiLoading: typeof import('./components/wui-loading/wui-loading.vue')['default']
    WuiLoadmore: typeof import('./components/wui-loadmore/wui-loadmore.vue')['default']
    WuiMessageBox: typeof import('./components/wui-message-box/wui-message-box.vue')['default']
    WuiOverlay: typeof import('./components/wui-overlay/wui-overlay.vue')['default']
    WuiNoticeBar: typeof import('./components/wui-notice-bar/wui-notice-bar.vue')['default']
    WuiPagination: typeof import('./components/wui-pagination/wui-pagination.vue')['default']
    WuiPicker: typeof import('./components/wui-picker/wui-picker.vue')['default']
    WuiPickerView: typeof import('./components/wui-picker-view/wui-picker-view.vue')['default']
    WuiPopover: typeof import('./components/wui-popover/wui-popover.vue')['default']
    WuiPopup: typeof import('./components/wui-popup/wui-popup.vue')['default']
    WuiProgress: typeof import('./components/wui-progress/wui-progress.vue')['default']
    WuiRadio: typeof import('./components/wui-radio/wui-radio.vue')['default']
    WuiRadioGroup: typeof import('./components/wui-radio-group/wui-radio-group.vue')['default']
    WuiRate: typeof import('./components/wui-rate/wui-rate.vue')['default']
    WuiResize: typeof import('./components/wui-resize/wui-resize.vue')['default']
    WuiRow: typeof import('./components/wui-row/wui-row.vue')['default']
    WuiSearch: typeof import('./components/wui-search/wui-search.vue')['default']
    WuiSelectPicker: typeof import('./components/wui-select-picker/wui-select-picker.vue')['default']
    WuiSlider: typeof import('./components/wui-slider/wui-slider.vue')['default']
    WuiSortButton: typeof import('./components/wui-sort-button/wui-sort-button.vue')['default']
    WuiStatusTip: typeof import('./components/wui-status-tip/wui-status-tip.vue')['default']
    WuiStep: typeof import('./components/wui-step/wui-step.vue')['default']
    WuiSteps: typeof import('./components/wui-steps/wui-steps.vue')['default']
    WuiSticky: typeof import('./components/wui-sticky/wui-sticky.vue')['default']
    WuiStickyBox: typeof import('./components/wui-sticky-box/wui-sticky-box.vue')['default']
    WuiSwipeAction: typeof import('./components/wui-swipe-action/wui-swipe-action.vue')['default']
    WuiSwitch: typeof import('./components/wui-switch/wui-switch.vue')['default']
    WuiTab: typeof import('./components/wui-tab/wui-tab.vue')['default']
    WuiTabs: typeof import('./components/wui-tabs/wui-tabs.vue')['default']
    WuiTag: typeof import('./components/wui-tag/wui-tag.vue')['default']
    WuiToast: typeof import('./components/wui-toast/wui-toast.vue')['default']
    WuiTooltip: typeof import('./components/wui-tooltip/wui-tooltip.vue')['default']
    WuiTransition: typeof import('./components/wui-transition/wui-transition.vue')['default']
    WuiUpload: typeof import('./components/wui-upload/wui-upload.vue')['default']
    WuiNotify: typeof import('./components/wui-notify/wui-notify.vue')['default']
    WuiWatermark: typeof import('./components/wui-watermark/wui-watermark.vue')['default']
    WuiCircle: typeof import('./components/wui-circle/wui-circle.vue')['default']
    WuiSwiper: typeof import('./components/wui-swiper/wui-swiper.vue')['default']
    WuiSwiperNav: typeof import('./components/wui-swiper-nav/wui-swiper-nav.vue')['default']
    WuiSegmented: typeof import('./components/wui-segmented/wui-segmented.vue')['default']
    WuiTabbar: typeof import('./components/wui-tabbar/wui-tabbar.vue')['default']
    WuiTabbarItem: typeof import('./components/wui-tabbar-item/wui-tabbar-item.vue')['default']
    WuiNavbar: typeof import('./components/wui-navbar/wui-navbar.vue')['default']
    WuiNavbarCapsule: typeof import('./components/wui-navbar-capsule/wui-navbar-capsule.vue')['default']
    WuiTable: typeof import('./components/wui-table/wui-table.vue')['default']
    WuiTableCol: typeof import('./components/wui-table-col/wui-table-col.vue')['default']
    WuiSidebar: typeof import('./components/wui-sidebar/wui-sidebar.vue')['default']
    WuiSidebarItem: typeof import('./components/wui-sidebar-item/wui-sidebar-item.vue')['default']
    WuiFab: typeof import('./components/wui-fab/wui-fab.vue')['default']
    WuiCountDown: typeof import('./components/wui-count-down/wui-count-down.vue')['default']
    WuiNumberKeyboard: typeof import('./components/wui-number-keyboard/wui-number-keyboard.vue')['default']
    WuiGap: typeof import('./components/wui-gap/wui-gap.vue')['default']
    WuiPasswordInput: typeof import('./components/wui-password-input/wui-password-input.vue')['default']
    WuiForm: typeof import('./components/wui-form/wui-form.vue')['default']
    WuiTextarea: typeof import('./components/wui-textarea/wui-textarea.vue')['default']
    WuiVideoPreview: typeof import('./components/wui-video-preview/wui-video-preview.vue')['default']
    WuiBacktop: typeof import('./components/wui-backtop/wui-backtop.vue')['default']
    WuiSkeleton: typeof import('./components/wui-skeleton/wui-skeleton.vue')['default']
    WuiIndexBar: typeof import('./components/wui-index-bar/wui-index-bar.vue')['default']
    WuiIndexAnchor: typeof import('./components/wui-index-anchor/wui-index-anchor.vue')['default']
    WuiText: typeof import('./components/wui-text/wui-text.vue')['default']
    WuiCountTo: typeof import('./components/wui-count-to/wui-count-to.vue')['default']
  }
}

export {}
