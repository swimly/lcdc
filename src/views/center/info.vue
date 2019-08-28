<template>
  <div v-if="userInfo">
    <h2 class="page-title">个人信息</h2>
    <h3 class="page-subtitle">头像</h3>
    <div class="flex horizontal v-m">
      <img :src="`${url}/${userInfo.avatar}`" alt="" class="avatar">
      <div class="flex-1 flex vertical" style="padding-left:20px;">
        <p style="font-size:0.7rem;">为了让大家更好的认识你，请上传近期的照片！</p>
        <Button @click="modal = true" style="width:140px;margin-top:20px;">上传头像</Button>
      </div>
    </div>
    <h3 class="page-subtitle">资料</h3>
    <Modal
      v-model="modal"
      :mask-closable="false"
      @on-ok="uploadAvatar"
      title="上传头像">
      <croppa 
        v-model="myCroppa"
        placeholder="请选择图片或者拖拽到这里！"
        placeholder-color="#262626"
        :placeholder-font-size="14"
        canvas-color="transparent"
        :quality="1"
      ></croppa>
    </Modal>
  </div>
</template>
<script>
import api from '@/api'
export default {
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  data () {
    return {
      url: api.url,
      modal: false,
      myCroppa: {},
      form: {
        avatar: ''
      }
    }
  },
  methods: {
    uploadAvatar () {
      if (!this.myCroppa.hasImage()) {
        return false
      }
      this.form.avatar = this.myCroppa.generateDataUrl()
      this.$store.dispatch('ActionUpdateAvatarReload', this)
    }
  }
}
</script>

