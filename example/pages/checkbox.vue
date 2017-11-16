<template>
  <onion-page type="checkbox-view" title="Checkbox">
    <template slot="content">
      <onion-checkbox v-model="checked">Checkbox</onion-checkbox>
      <p>checked value: {{checked}}</p>
      <onion-checkbox v-model="checked" :disabled="true">Disabled Checkbox</onion-checkbox>
      <onion-checkbox v-model="checked" position="right">Position Checkbox</onion-checkbox>
      <onion-checkbox v-model="checked2" label="labelValue">Set label Checkbox</onion-checkbox>
      <p>checked value (with label) : {{checked2}}</p>
    </template>
  </onion-page>
</template>

<script type="text/ecmascript-6">
  import OnionPage from '../components/onion-page.vue'

  export default {
    data() {
      return {
        checked: true,
        checked2: false
      }
    },
    components: {
      OnionPage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-view
    .content
      >
        *
          margin: 10px 0
</style>
