<template>
  <div id="app">
    <header class="onion-bar">
      <h1>onion-ui</h1>
    </header>
    <section class="onion-content" ref="mfct">
      <ul class="onion-list">
        <li class="onion-item border-bottom-1px" v-for="component in components">
          <router-link class="link" :to="component.path">{{component.text}}<i
              class="onion-arrow"></i>
          </router-link>
        </li>
      </ul>
    </section>
    <transition name="move">
      <router-view class="onion-view"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        components: [
          {
            path: '/button',
            text: '按钮'
          },
          {
            path: '/checkbox',
            text: '复选框'
          },
          {
            path: '/checkbox-group',
            text: '复选框组'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color: #fff
  .onion-bar
    position: fixed
    z-index: 10
    right: 0
    left: 0
    height: 44px
    line-height: 44px
    text-align: center
    background-color: #f7f7f7
    box-shadow: 0 1px 6px #ccc
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    h1
      font-size: 18px
      font-weight: 500

  .onion-content
    position: fixed
    width: 100%
    top: 44px
    left: 0
    bottom: 0
    overflow: scroll
    .onion-list
      padding-left: 10px
      .onion-item
        height: 40px
        line-height: 40px
        .link
          display: block
          position: relative
          width: 100%
          color: #333
          text-decoration: none
          outline: 0
          .onion-arrow
            position: absolute
            right: 0
            padding: 0 5px
            color: #ccc

  .onion-view
    transition: all 0.3s
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transform: translate3d(100%, 0, 0)

</style>
