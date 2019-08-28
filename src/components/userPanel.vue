<template>
  <div class="user-panel">
    <div class="not-login" v-if="!data">
      <router-link to="login">登录</router-link>
      <router-link to="register">注册</router-link>
    </div>
    <div class="logined" v-else>
      <Poptip trigger="click" content="content">
        <div class="flex horizontal v-m">
          <img class="avatar" :src="`${url}/${data.avatar}`" alt="">
          <p class="name" style="padding:0 0.2rem;">{{data.username}}</p>
          <Icon type="ios-arrow-down" style="font-size:1.1rem;"/>
        </div>
        <ul class="menu" slot="content">
          <li>
            <router-link to="/center">个人中心</router-link>
          </li>
          <li>
            <router-link to="/article/publish">发布文章</router-link>
          </li>
          <li>
            <router-link to="/component/publish">发布组件</router-link>
          </li>
          <li>
            <router-link to="/logout">退出登录</router-link>
          </li>
        </ul>
      </Poptip>
    </div>
  </div>
</template>
<script>
import api from '@/api'
export default {
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      url: api.url
    }
  }
}
</script>
<style lang="scss">
.ivu-poptip-title{
  display:none;
}
</style>

<style lang="scss" scoped>
.user-panel{
  display:flex;
  flex-direction:row;
  align-items:center;
  .logined{
    margin-left:2rem;
    .avatar{
      width:2rem;
      height:2rem;
      margin-right:0.2rem;
    }
  }
  > a{
    text-decoration:none;
    color:#666;
    font-size:0.75rem;
    margin-left:1rem;
    padding-left:1rem;
    position:relative;
    &:before{
      content:"";
      display:inline-block;
      width:1px;
      height:0.7rem;
      background:#e6e6e6;
      position:absolute;
      left:0;
      top:50%;
      margin-top:-0.35rem;
    }
    &:first-child{
      &:before{
        display:none;
      }
    }
  }
  .logined{
    .name{
      font-size:0.7rem;
      color:#262626;
      cursor: pointer;
    }
    .menu{
      display:flex;
      flex-direction:column;
      li{
        display:flex;
        flex-direction:row;
        align-items:center;
        a{
          font-size:0.8rem;
          color:#262626;
          padding:0.5rem 1rem;
          border-bottom:1px solid #e6e6e6;
          display:block;
          flex:1;
        }
        &:last-child{
          a{
            border:none;
          }
        }
      }
    }
  }
}
</style>
