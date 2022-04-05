<script>
import { RouterLink, RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  }
}
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <RouterView />
</template>