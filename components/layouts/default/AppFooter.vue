<template>
  <div class="layout-footer">
    <img alt="Logo" :src="footerImage()" height="20" class="mr-2">
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
  computed: {
    darkTheme () {
      return this.$appState.darkTheme
    }
  },
  methods: {
    footerImage () {
      return this.$appState.darkTheme ? '/images/logo-white.svg' : '/images/logo-dark.svg'
    }
  }
}
</script>

<style scoped>

</style>
