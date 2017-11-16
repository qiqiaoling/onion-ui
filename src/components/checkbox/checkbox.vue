<template>
  <div class="onion-checkbox" :class="_containerClass" :data-pos="position">
    <label class="onion-checkbox-wrap" :class="_wrapClass">
      <input class="onion-checkbox-input" type="checkbox" :disabled="disabled" v-model="checkValue">
      <span class="onion-checkbox-ui onion-round-border">
        <i class="onion-right"></i>
      </span>
      <span class="onion-checkbox-label">
        <slot>{{label}}</slot>
      </span>
    </label>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'onion-checkbox'

  const EVENT_INPUT = 'input'
  const EVENT_CHECKED = 'checked'
  const EVENT_CANCLE_CHECKED = 'cancel-checked'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [Boolean, String],
        require: true
      },
      label: {
        type: [Boolean, String]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'left'
      }
    },
    data () {
      const parent = this.$parent
      const isInGroup = parent.$data._checkboxGroup
      const isInHorizontalGroup = isInGroup && parent.$props.horizontal
      return {
        isInGroup,
        isInHorizontalGroup
      }
    },
    computed: {
      checkValue: {
        get () {
          if (this.isInGroup) {
            return this.$parent.value.indexOf(this.label) > -1
          } else {
            return Boolean(this.value)
          }
        },
        set (newValue) {
          const emitValue = this.label && newValue ? this.label : newValue
          const parentEmitEvent = newValue ? EVENT_CHECKED : EVENT_CANCLE_CHECKED
          this.$emit(EVENT_INPUT, emitValue)
          if (this.isInGroup) {
            this.$parent.$emit(parentEmitEvent, this.label || newValue, this)
          }
        }
      },
      _containerClass() {
        if (this.isInHorizontalGroup) {
          return 'border-right-1px'
        }
      },
      _wrapClass() {
        const isInHorizontalGroup = this.isInHorizontalGroup
        return {
          'onion-checkbox_checked': this.checkValue,
          'onion-checkbox_disabled': this.disabled,
          'border-bottom-1px': this.isInGroup && !isInHorizontalGroup
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"

  $ui-width = 1.42em
  .onion-checkbox
    position: relative
    padding: 0 16px
    text-align: left
    font-size: 100%
    color: $checkbox-color
    background-color: $checkbox-bgc
    &[data-pos="right"]
      .onion-checkbox-wrap
        padding-left: 0
        padding-right: $ui-width
      .onion-checkbox-ui
        left: auto
        right: 0
  .onion-checkbox-wrap
    position: relative
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    height: 100%
    padding: 11px 0
    line-height: 1.5
    word-break: break-word
    word-wrap: break-word
  .onion-checkbox-input
    z-index: 1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    opacity: 0
  .onion-checkbox-ui
    position: relative
    width: 1em
    height: 1em
    margin-right: $ui-width - 1em
    line-height: 1
    border-radius: 50%
    &::before, i
      transition: all .2s
    &::before
      color: $checkbox-icon-color
      display: inline-block
      transform: scale(1.2)
    i
      position: absolute
      top: 0
      left: 0
      color: transparent
      transform: scale(.4)
  .onion-checkbox_checked
    .onion-checkbox-ui
      &::before
        color: transparent
      i
        color: $checkbox-checked-icon-color
        transform: scale(1.23)
  .onion-checkbox_disabled
    .onion-checkbox-ui
      background-color: $checkbox-disabled-icon-bgc
      &::before, i
        transition: none
      &::before
        color: transparent
      i
        color: $checkbox-disabled-icon-color
  .onion-checkbox_checked.onion-checkbox_disabled
    .onion-checkbox-ui
      background-color: $checkbox-checked-icon-bgc
</style>
