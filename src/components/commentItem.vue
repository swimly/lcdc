<template>
  <div>
    <ul class="comment-list">
      <li class="comment-item" v-for="(item, index) in data" :key="index">
        <div class="comment-user">
          <div class="flex-1 flex horizontal v-m">
            <img src="" alt="">
            <h2 class="comment-user-name">{{item.author.username}}</h2>
          </div>
          <p class="comment-time">{{item.created_at}}</p>
        </div>
        <p class="comment-content">{{item.content}}</p>
        <div class="comment-children">
          <hc-comment-item :data="item.children"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'hc-comment-item',
  props: {
    data: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.comment-list{
  list-style:none;
  padding:0;
  .comment-item{
    display:flex;
    flex-direction:column;
    border-bottom:1px solid #e6e6e6;
    padding:0.5rem 0.5rem;
    .comment-user{
      display:flex;
      flex-direction:row;
      align-items:center;
      width:100%;
      .comment-time{
        font-size:0.7rem;
        color:#999;
      }
      &-name{
        font-size:0.8rem;
        font-weight:normal;
        color:#262626;
      }
    }
    .comment-content{
      font-size:0.8rem;
      color:#262626;
      margin:0.5rem 0 0 0;
    }
  }
}
</style>
