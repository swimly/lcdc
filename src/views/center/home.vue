<template>
  <div class="center mid-layout flex-1 flex horizontal">
    <div class="center-aside">
      <div class="aside-menu flex vertical">
        <router-link to="/center/info">个人信息</router-link>
        <router-link to="/center/article">我的文章</router-link>
        <router-link to="/center/collection">我的收藏</router-link>
        <router-link to="/center/collection">修改密码</router-link>
        <router-link to="/center/structure">组织架构</router-link>
        <router-link to="/center/articletype">文章分类</router-link>
        <router-link to="/center/component">组件分类</router-link>
      </div>
    </div>
    <div class="center-content flex-1">
      <router-view name="center"></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.center{
  padding:1rem !important;
}
.center-aside{
  width:240px;
  .aside-menu{
    a{
      font-size:0.8rem;
      color:#262626;
      padding:0.7rem 1rem;
      border-bottom:1px solid #f9f9f9;
      &.router-link-exact-active{
        color:rgb(40, 120, 255);
        background:rgba(40, 120, 255,0.05);
      }
    }
  }
}
.center-content{
  padding-left:2rem;
  overflow:hidden;
}
</style>
