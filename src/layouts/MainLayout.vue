<template>
  <div>
    <MainPage/>
  </div>
</template>

<script>

import { defineComponent, ref } from 'vue'
import MainPage from './../components/Main-page.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainPage
  }
})
</script>
