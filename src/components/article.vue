<template>
  <div class="article-item">
    <div class="flex horizontal">
      <div class="article-content">
        <div class="flex horizontal">
          <h2 class="article-title flex-1">{{item.title}}</h2>
          <span class="article-time">{{formatTime(item.created_at)}}</span>
        </div>
        <p class="article-text">{{item.content.split('#')[0]}}</p>
        <div class="article-info flex horizontal">
          <p class="flex-1 flex horizontal v-m">
            <span class="tag">{{item.classify.title}}</span>
            <span class="flex horizontal v-m">
              <img class="avatar" :src="`${api.url}/${item.author.avatar}`">
              <span>{{item.author.username}}</span>
            </span>
            <span>评论：{{item.comment}}</span>
            <span>点赞：{{item.thumb.length}}</span>
          </p>
          <router-link class="link" :to="`/article/${item._id}`">查看</router-link>
        </div>
      </div>
      <div class="article-cover" :style="`background-image:url(${api.url}/${item.cover})`"></div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
moment.locale("zh-cn");
export default {
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    api() {
      return this.$store.state.api;
    }
  },
  created() {
    console.log(this.item);
  },
  methods: {
    formatTime(str) {
      return moment(str)
        .startOf("hour")
        .fromNow();
    }
  }
};
</script>
<style lang="scss" scoped>
.article-item {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  &:last-child {
    border: none;
  }
  .avatar {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.2rem;
  }
  .article-cover {
    width: 140px;
    min-height: 100px;
    background-size:contain;
    margin-left:20px;
  }
  .article-time {
    font-size: 0.7rem;
    color: #999;
  }
  .article-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .article-title {
      font-size: 0.9rem;
      color: #262626;
      margin: 0 0 0.5rem 0;
    }
    .article-text {
      font-size: 0.8rem;
      color: #262626;
      margin: 0;
      min-height:60px;
    }
  }
  .article-info {
    margin: 0.5rem 0 0 0;
    font-size: 0.7rem;
    color: #666;
    span {
      margin-right: 2rem;
    }
    .link {
      text-decoration: none;
      color: #2878ff;
    }
    .tag {
      background: #f3563d;
      color: #fff;
      padding: 0 0.3rem;
      display: inline-block;
      height: 1.2rem;
      line-height: 1.2rem;
      border-radius: 0.2rem;
      margin-right: 2rem;
    }
  }
}
</style>

