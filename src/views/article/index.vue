<template>
  <div class="scroll">
    <div class="mid-layout article flex vertical v-t">
      <hc-tab :data="type" link="article"/>
      <hc-article v-for="(item, index ) in list" :key="index" :item="item"/>
      <tip-page/>
    </div>
  </div>
</template>
<script>
import HcTab from '@/components/tab.vue'
import HcArticle from '@/components/article.vue'
import TipPage from '@/components/tippage.vue'
export default {
  head: {
    title: {
      inner: '文章'
    }
  },
  computed: {
    type () {
      return this.$store.state.articleType
    },
    list () {
      return this.$store.state.articles
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
  components: {
    HcTab,
    HcArticle,
    TipPage
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.form.classify = this.$route.query.type
      this.$store.dispatch('ActionArticles', this)
    }
  },
  watch: {
    '$route': 'init'
  }
}
</script>
<style lang="scss" scoped>
.article{
  min-height:100%;
}
</style>

