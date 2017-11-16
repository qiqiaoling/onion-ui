<template>
  <onion-page type="checkbox-group-view" title="CheckboxGroup">
    <template slot="content">
      <onion-checkbox-group v-model="checkList">
        <onion-checkbox label="1">Checkbox 1</onion-checkbox>
        <onion-checkbox label="2">Checkbox 2</onion-checkbox>
        <onion-checkbox label="3" :disabled="true">Disabled Checkbox</onion-checkbox>
        <onion-checkbox label="4" :disabled="true">Disabled & Checked Checkbox</onion-checkbox>
      </onion-checkbox-group>
      <p>checkList value : {{checkList}}</p>
      <onion-checkbox-group v-model="checkList" :horizontal="true">
        <onion-checkbox label="1">1</onion-checkbox>
        <onion-checkbox label="2">2</onion-checkbox>
        <onion-checkbox label="3" :disabled="true">3</onion-checkbox>
        <onion-checkbox label="4" :disabled="true">4</onion-checkbox>
      </onion-checkbox-group>
    </template>
  </onion-page>
</template>

<script type="text/ecmascript-6">
  import OnionPage from '../components/onion-page.vue'

  export default {
    data() {
      return {
        checkList: ['1', '4']
      }
    },
    components: {
      OnionPage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checkbox-group-view
    .content
      >
        *
          margin: 10px 0
</style>
