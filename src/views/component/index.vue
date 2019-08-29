<template>
  <div class="mid-layout">
    <hc-tab :data="type" link="component"/>
    <ul class="component-list">
      <li class="component-item" v-for="(item, index) in list" :key="index">
        <router-link :to="`/component/${item._id}`">
          <span class="cover" :style="`background-image:url(${api.url}/${item.cover});`"></span>
          <b class="title">{{item.title}}</b>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import HcTab from '@/components/tab.vue'
export default {
  components: {
    HcTab
  },
  computed: {
    type () {
      return this.$store.state.componentType
    },
    list () {
      return this.$store.state.components
    },
    api () {
      return this.$store.state.api
    }
  },
  data () {
    return {
      form: {
        classify: '',
        page: 1,
        pagesize: 5,
        total: 0
      }
    }
  },
  created () {
    this.$store.dispatch('ActionComponentType', this)
    this.init()
  },
  methods: {
    init () {
      this.form.classify = this.$route.query.type
      this.$store.dispatch('ActionComponentList', this)
    }
  },
  watch: {
    '$route': 'init'
  }
}
</script>
<style lang="scss" scoped>
.component-list{
  font-size:0;
  display:block;
  margin:0 -1rem;
  .component-item{
    display:inline-block;
    font-size:0.8rem;
    color:#262626;
    padding:1rem;
    box-sizing: border-box;
    width:25%;
    .cover{
      display:block;
      width:100%;
      height:100px;
    }
  }
}
</style>
