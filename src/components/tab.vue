<template>
  <div class="hc-tab">
    <router-link :to="`${link}`">全部</router-link>
    <router-link :to="`${link}?type=${item._id}`" class="hc-tab-item" v-for="(item, index) in data" :key="index">
      <span>{{item.title}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    },
    link: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
.hc-tab{
  display:flex;
  flex-direction:row;
  align-items:center;
  border-bottom:1px solid #e6e6e6;
  width:100%;
  a{
    text-decoration:none;
    font-size:0.8rem;
    color:#262626;
    height:3rem;
    line-height:3rem;
    padding:0 0.5rem;
    margin-right:1rem;
    &.router-link-exact-active{
      color:#2878ff;
    }
  }
}
</style>

