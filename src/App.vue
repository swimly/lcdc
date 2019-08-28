<template>
  <div id="app" class="page">
    <header class="header">
      <hc-header :logo="logo" :nav="navigator"/>
    </header>
    <section class="section">
      <router-view class="content"/>
    </section>
    <hc-footer/>
  </div>
</template>
<script>
import 'iview/dist/styles/iview.css'
import HcHeader from '@/components/layout/header.vue'
import HcFooter from '@/components/layout/footer.vue'
export default {
  components: {
    HcHeader,
    HcFooter
  },
  computed: {
    logo () {
      return this.$store.state.logo
    },
    navigator () {
      return this.$store.state.navigator
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
