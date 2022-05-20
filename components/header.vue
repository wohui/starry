<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" :src="'../assets/piano.svg'" height="40" class="mr-2" />
      </template>
    </Menubar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const items = ref([
      {
        label: '曲谱',
        class: '',
      },
      {
        label: 'Midi',
      },
      {
        label: '音乐工具',
      },
    ])

    return { items }
  },
}
</script>
<style lang="scss" scoped>
::v-deep(.p-menubar-root-list) {
  margin-left: 70%;
  width: 20%;
}
::v-deep(.p-menuitem) {
}
</style>
