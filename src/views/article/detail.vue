<template>
  <div class="article" v-if="article">
    <div class="mid-layout">
      <div class="flex horizontal">
        <h1 class="article-title flex-1">{{article.title}}</h1>
        <div></div>
      </div>
      <div class="flex horizontal v-m info">
        <div class="flex-1 flex horizontal">
          <p class="article-info">分类：{{article.classify.title}}</p>
          <p class="article-info">作者：{{article.author.username}}</p>
        </div>
        <div>
          <p class="article-info">{{formatTime(article.created_at)}}</p>
        </div>
      </div>
      <div style="text-align:center;">
        <img :src="`${api.url}/${article.cover}`" alt="">
      </div>
      <mavon-editor v-model="article.content" :boxShadow="false" defaultOpen="preview" :ishljs="true" :toolbarsFlag="false" :subfield="false" fontSize="16px"></mavon-editor>
      <hc-comment :data="comment" :id="form.id"/>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import HcComment from '@/components/comment.vue'
moment.locale('zh-cn')
export default {
  components: {
    HcComment
  },
  computed: {
    article () {
      return this.$store.state.article
    },
    api () {
      return this.$store.state.api
    },
    comment () {
      return this.$store.state.commentList
    },
    formatTime () {
      return (str) => {
        return moment(str).format('llll')
      }
    }
  },
  data () {
    return {
      form: {
        id: ''
      }
    }
  },
  created () {
    this.form.id = this.$route.params.id
    this.$store.dispatch('ActionArticlePage', this)
  }
}
</script>
<style lang="scss">
.v-note-wrapper .v-note-panel{
  border:none !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content{
  background:none !important;
}
.article{
  overflow:auto;
  margin:0;
  .article-title{
    font-size:1.4rem;
    color:#262626;
    margin:1rem 1rem 1rem 0;
  }
  .info{
    background:#f9f9f9;
    padding:0.6rem 1rem;
    margin-bottom:2rem;
  }
  .article-info{
    font-size:0.7rem;
    color:#999;
    margin-right:2rem;
    &:last-child{
      margin:0;
    }
  }
}
</style>
