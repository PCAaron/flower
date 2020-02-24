<template>
  <div id="app">
    <f-button>button</f-button>
    <f-button icon='settings' icon-position='left'>button</f-button>
    <f-button icon='settings' icon-position='right' :loading="true">button</f-button>
    <f-icon name='settings'></f-icon>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="scss">

</style>
