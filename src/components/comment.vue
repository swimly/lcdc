<template>
  <div class="comment">
    <h2 class="comment-title">评论</h2>
    <div class="textarea" ref="content" contenteditable="true"></div>
    <div class="flex horizontal t-r">
      <button class="button primary" style="width:200px;" @click="handlePublish">发布</button>
    </div>
    <h2 class="comment-title">评论列表</h2>
    <hc-comment-item :data="data"/>
  </div>
</template>
<script>
import HcCommentItem from '@/components/commentItem.vue'
export default {
  props: {
    data: {
      type: Array
    },
    id: {
      type: String
    },
    type: {
      type: String,
      default: 'article'
    }
  },
  data () {
    return {
      form: {
        id: '',
        classify: '',
        relation: '',
        parentId: '',
        content: '',
        author: ''
      }
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  components: {
    HcCommentItem
  },
  created () {
    this.form.id = this.id
    this.form.classify = this.type
    this.form.relation = this.id
    this.form.author = this.userInfo._id
  },
  methods: {
    handlePublish () {
      this.form.content = this.$refs.content.innerHTML
      this.$store.dispatch('ActionCommentUpdate', this)
      this.$refs.content.innerHTML = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.comment{
  .comment-title{
    font-size:1.1rem;
    font-weight:normal;
    border-bottom:1px solid #e6e6e6;
    padding:1rem;
    margin-bottom:1rem;
  }
  .textarea{
    padding:0.5rem;
    border:1px solid #e6e6e6;
    min-height:120px;
    outline:none;
    margin-bottom:0.5rem;
  }
}
</style>
