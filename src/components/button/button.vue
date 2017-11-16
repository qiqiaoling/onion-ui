<template>
  <button
    class="onion-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  const COMPONENT_NAME = 'onion-button'
  export default {
    name: COMPONENT_NAME,
    props: {
      icon: {
        type: String,
        default: ''
      },
      active: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      inline: {
        type: Boolean,
        default: false
      },
      primary: {
        type: Boolean,
        default: false
      },
      outline: {
        type: Boolean,
        default: false
      },
      white: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'button'
      }
    },
    computed: {
      btnClass() {
        return {
          'onion-btn_active': this.active,
          'onion-btn_disabled': this.disabled,
          'onion-btn-inline': this.inline,
          'onion-btn-primary': this.primary,
          'onion-btn-outline': this.outline,
          'onion-btn-outline-primary': this.outline && this.primary,
          'onion-btn-white': this.white
        }
      }
    },
    methods: {
      handleClick(event) {
        if (this.disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  @import "../../common/stylus/mixin.styl"
  btn-active($bg, $border = $bg)
    &.onion-btn_active, &:active
      background: $bg
      border-1px($border)

  .onion-btn
    display: block
    margin: 0
    padding: 14px 16px
    width: 100%
    text-align: center
    white-space: nowrap
    cursor: pointer
    font-size: $font-17
    font-weight bold
    line-height: 1
    color: $white
    background: $blue-5
    outline: none
    border: none
    border-radius: 2px
    box-sizing: border-box
    -webkit-tap-highlight-color: transparent
    > i
      display: inline-block
      margin-right: 4px
      font-size: 100%
      transform: scale(1.13)
      transform-origin: right center
    btn-active($blue-4, $btn-active-bdc)
    &.onion-btn_disabled,
    &.onion-btn_disabled.onion-btn_active,
    &.onion-btn_disabled:active
      color: $gray-3
      background: $gray-2
      border-1px($btn-disabled-bdc)

  .onion-btn-white
    color: $blue-5
    background-color: $white
    btn-active($gray-e8, $btn-light-active-bdc)

  .onion-btn-inline
    width: auto
    display: inline-block
    vertical-align: middle
    padding: 9px 10px
    font-size: $fontsize-small
    font-weight bold
    > i
      margin-right: 2px
      transform: scale(1.14)

  .onion-btn-primary
    color: $btn-primary-color
    background: $btn-primary-bgc
    border-1px($btn-primary-bdc)
    btn-active($btn-primary-active-bgc, $btn-primary-active-bdc)

  

  .onion-btn-light
    color: $btn-light-color
    background: $btn-light-bgc
    box-shadow: $box-shadow-content
    btn-active($btn-light-active-bgc, $btn-light-active-bdc)

  .onion-btn-outline
    color: $btn-outline-color
    background: $btn-outline-bgc
    border-1px($btn-outline-bdc)
    btn-active($btn-outline-active-bgc, $btn-outline-active-bdc)

  .onion-btn-outline-primary
    color: $btn-outline-primary-color
    background: $btn-outline-primary-bgc
    border-1px($btn-outline-primary-bdc)
    btn-active($btn-outline-primary-active-bgc, $btn-outline-primary-active-bdc)
</style>
