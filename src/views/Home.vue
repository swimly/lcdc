<template>
  <div class="mid-layout"></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.tip{
  height:100%;
  h1{
    font-size:1.5rem;
    color:#ff6a00;
    margin:0;
  }
  p{
    font-size:0.8rem;
    color:#999;
    margin:0;
  }
}
</style>
