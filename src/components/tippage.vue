<template>
  <div class="tip-page">
    <img :src="image" alt="">
    <p>{{text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '抱歉，该分类没有数据！'
    },
    image: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.tip-page{
  width:100%;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
}
</style>
