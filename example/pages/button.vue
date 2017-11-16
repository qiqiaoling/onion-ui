<template>
  <onion-page type="button-view" title="按钮">
    <div slot="content">
      <form action="/">
        <onion-button-group>
          <onion-button>蓝色按钮f17h45</onion-button>
          <onion-button type="submit">蓝色submit按钮</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button :active="true">蓝色active按钮</onion-button>
          <onion-button :disabled="true">禁用按钮</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button icon="onion-right">带icon的按钮</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button :white="true">白色按钮</onion-button>
          <onion-button :height50="true">蓝色按钮f17h50</onion-button>
          <onion-button :f19h54="true">白色按钮f19h54</onion-button>
          <onion-button :f19h54="true" :cRed='true'>白色按钮f19h54</onion-button>
          <onion-button :f19h54="true" :cGray='true'>白色按钮f19h54</onion-button>
          <onion-button :inline="true">行内按钮</onion-button>
          <onion-button :inline="true" :disabled="true">禁用按钮</onion-button>
          <onion-button :outline="true">按钮</onion-button>
          <onion-button :primary="true">按钮</onion-button>
        </onion-button-group>
        <div>
          <onion-checkbox-group v-model="buttonStyle" :horizontal="true">
            <onion-checkbox label="inline">复选</onion-checkbox>
            <onion-checkbox label="outline">复选</onion-checkbox>
            <onion-checkbox label="primary">复选</onion-checkbox>
          </onion-checkbox-group>
          <onion-button-group>
            <onion-button :inline="inlineStyle" :outline="outlineStyle" :primary="primaryStyle">按钮</onion-button>
          </onion-button-group>
        </div>
      </form>
    </div>
  </onion-page>
</template>

<script type="text/ecmascript-6">
  import OnionButtonGroup from '../components/onion-button-group.vue'
  import OnionPage from '../components/onion-page.vue'
  export default {
    data() {
      return {
        buttonStyle: ['inline', 'outline', 'primary']
      }
    },
    computed: {
      inlineStyle() {
        return this.buttonStyle.indexOf('inline') >= 0
      },
      outlineStyle() {
        return this.buttonStyle.indexOf('outline') >= 0
      },
      primaryStyle() {
        return this.buttonStyle.indexOf('primary') >= 0
      }
    },
    components: {
      OnionButtonGroup,
      OnionPage
    }
  }
</script>
