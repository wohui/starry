<template>
  <div class="layout-topbar">
    <NuxtLink to="/" class="layout-topbar-logo">
      <img alt="Logo" :src="topbarImage()" />
      <span>Starry</span>
    </NuxtLink>
    <button
      class="p-link layout-menu-button layout-topbar-button"
      @click="onMenuToggle"
    >
      <i class="pi pi-bars" />
    </button>

    <button
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
      class="p-link layout-topbar-menu-button layout-topbar-button"
    >
      <i class="pi pi-ellipsis-v" />
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <a href="https://support.qq.com/product/408755" target="_blank">
          <button class="p-link layout-topbar-button">
            <i class="pi pi-comments" />
            <span>讨论</span>
          </button>
        </a>
      </li>
      <li>
        <a href="https://github.com/wohui/" target="_blank">
          <button class="p-link layout-topbar-button">
            <i class="pi pi-github" />
            <span>Github</span>
          </button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['topbar-menu-toggle', 'menu-toggle'],
  computed: {
    darkTheme() {
      return this.$appState.darkTheme
    },
  },
  methods: {
    onMenuToggle(event) {
      this.$emit('menu-toggle', event)
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event)
    },
    topbarImage() {
      return this.$appState.darkTheme
        ? '/images/logo-white.svg'
        : '/images/logo-dark.svg'
    },
  },
}
</script>
