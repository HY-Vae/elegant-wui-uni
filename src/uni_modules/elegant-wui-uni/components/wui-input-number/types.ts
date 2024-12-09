/*
 * @Author: Mr zhang
 * @Date: 2024-03-15 20:40:34
 * @LastEditTime: 2024-09-18 09:49:12
 * @LastEditors: Mr zhang
 * @Description:
 * @FilePath: \elegant-wui-uni\src\uni_modules\elegant-wui-uni\components\wui-input-number\types.ts
 * 记得注释
 */
import { baseProps, makeBooleanProp, makeNumberProp, makeNumericProp, makeRequiredProp, makeStringProp, numericProp } from '../common/props'

export const inputNumberProps = {
  ...baseProps,
  /**
   * 绑定值
   */
  modelValue: makeRequiredProp(numericProp),
  /**
   * 最小值
   */
  min: makeNumberProp(1),
  /**
   * 最大值
   */
  max: makeNumberProp(Number.MAX_SAFE_INTEGER),
  /**
   * 步进值
   */
  step: makeNumberProp(1),
  /**
   * 是否严格按照步进值递增或递减
   */
  stepStrictly: makeBooleanProp(false),
  /**
   * 数值精度
   */
  precision: makeNumberProp(0),
  /**
   * 是否禁用
   */
  disabled: makeBooleanProp(false),
  /**
   * 是否禁用输入框
   */
  disableInput: makeBooleanProp(false),
  /**
   * 是否禁用减号按钮
   */
  disableMinus: makeBooleanProp(false),
  /**
   * 是否禁用加号按钮
   */
  disablePlus: makeBooleanProp(false),
  /**
   * 是否不显示输入框
   */
  withoutInput: makeBooleanProp(false),
  /**
   * 输入框宽度
   */
  inputWidth: makeNumericProp(36),
  /**
   * 是否允许为空
   */
  allowNull: makeBooleanProp(false),
  /**
   * 输入框占位符
   */
  placeholder: makeStringProp(''),
  /**
   * 原生属性，键盘弹起时，是否自动上推页面
   */
  adjustPosition: makeBooleanProp(true)
}
