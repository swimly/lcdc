<template>
  <div class="mid-layout flex horizontal v-m h">
    <h1 class="logo">{{logo.title}}</h1>
    <nav class="nav flex-1">
      <router-link :to="item.router" v-for="(item, index) in nav" :key="index">{{item.label}}</router-link>
    </nav>
    <user-panel :data="userInfo"/>
  </div>
</template>
<script>
import userPanel from '@/components/userPanel.vue'
export default {
  components: {
    userPanel
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  props: {
    logo: {
      type: Object
    },
    nav: {
      type: Array
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$store.dispatch('ActionMe', this)
    }
  }
}
</script>
<style lang="scss" scoped>
.logo{
  margin:0;
  font-size:1.4rem;
  margin-right:3rem;
  color:#2878ff;
}
.nav{
  a{
    font-size:0.8rem;
    text-decoration:none;
    color:#181818;
    display:inline-block;
    margin:0 1rem;
    height:60px;
    line-height:60px;
    position:relative;
    &.router-link-active{
      color:#2878ff;
      &:after{
        transform:scaleX(1);
      }
    }
    &:after{
      content:"";
      display:block;
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:2px;
      background:#2878ff;
      transition:0.3s;
      transform:scaleX(0);
    }
  }
}
</style>
