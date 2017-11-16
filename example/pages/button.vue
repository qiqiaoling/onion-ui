<template>
  <onion-page type="button-view" title="Button">
    <div slot="content">
      <form action="/">
        <onion-button-group>
          <onion-button>Button</onion-button>
          <onion-button type="submit">Submit Button</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button :active="true">Active Button</onion-button>
          <onion-button :disabled="true">Disabled Button</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button icon="onionic-right">Button With Icon</onion-button>
        </onion-button-group>
        <onion-button-group>
          <onion-button :white="true">White Button</onion-button>
          <onion-button :inline="true">Inline Button</onion-button>
          <onion-button :outline="true">Outline Button</onion-button>
          <onion-button :primary="true">Primary Button</onion-button>
        </onion-button-group>
        <div>
          <onion-checkbox-group v-model="buttonStyle" :horizontal="true">
            <onion-checkbox label="inline">Inline</onion-checkbox>
            <onion-checkbox label="outline">Outline</onion-checkbox>
            <onion-checkbox label="primary">Primary</onion-checkbox>
          </onion-checkbox-group>
          <onion-button-group>
            <onion-button :inline="inlineStyle" :outline="outlineStyle" :primary="primaryStyle">Demo Button</onion-button>
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
