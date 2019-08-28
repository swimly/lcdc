<template>
  <div class="login-page mid-layout flex horizontal v-t">
    <div class="login-panel">
      <input v-model="form.username" type="text" placeholder="用户名" class="input">
      <input v-model="form.password" type="text" placeholder="用户名" class="input">
      <button class="button primary" @click="onSubmit">登录</button>
      <p>{{this.res}}</p>
      <div class="flex-1 flex horizontal v-m t-c">
      
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      form: {
        username: 'liuyong',
        password: '000000'
      },
      res: null
    }
  },
  methods: {
    ...mapActions({
      ActionLoginIn: 'ActionLoginIn'
    }),
    onSubmit () {
      this.$store.dispatch('ActionLoginIn', this).then(() => {
        console.log('登录成功！')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page{
  padding:50px !important;
  .login-panel{
    .input{
      margin-bottom:0.5rem;
    }
  }
}
</style>
