<template>
  <div class="mid-layout flex-1 flex vertical" style="overflow:hidden;">
    <div class="publish flex-1 flex vertical" style="overflow:hidden;">
      <ul class="flex horizontal t-lr v-m">
        <li class="flex-1"><input type="text" v-model="form.title" class="input" placeholder="请输入标题！"></li>
        <li style="padding:0 1rem;">
          <span>自动保存：</span>
          <i-switch v-model="autosave"/>
        </li>
        <li style="width:100px;"><Button long type="primary" shape="circle" icon="ios-paper-plane" size="large" @click="show = true">发布</Button></li>
      </ul>
      <mavon-editor class="flex-1" style="z-index:1;overflow:hidden;" v-model="form.content" :boxShadow="false" defaultOpen="edit" :ishljs="true"></mavon-editor>
      <Drawer title="发布文章" :closable="false" v-model="show" width="600">
        <div class="h flex vertical">
          <div class="flex-1">
            <Form label-position="top">
              <FormItem label="文章分类：">
                <RadioGroup v-model="classify" @on-change="onChange">
                  <Radio :label="item.title" v-for="(item, index) in type" :key="index"></Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="标签：">
                <Tag v-for="(item, index) in tags" :key="index" type="border" closable color="primary" @on-close="onClose(item)">{{item}}</Tag>
                <Input placeholder="标签" style="width: 200px" @on-blur="onBlur"/>
              </FormItem>
              <FormItem label="文章封面：">
                <Upload
                    type="drag"
                    :on-success="onSuccess"
                    :headers="headers"
                    :action="upload">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                        <p>点击或者将图片拖拽到此上传！</p>
                    </div>
                </Upload>
              </FormItem>
            </Form>
            {{classify}}
          </div>
          <div class="flex horizontal v-m">
            <div class="flex-1 flex horizontal v-m">
              <span>是否公开：</span>
              <i-switch v-model="form.public"/>
            </div>
            <Button shape="circle" icon="ios-filing" size="large">保存草稿</Button>
            <Button type="primary" shape="circle" icon="ios-paper-plane" size="large" style="margin-left:0.5rem;" @click="onSubmit">确认发布</Button>
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</template>
<script>
import api from '@/api'
export default {
  computed: {
    type () {
      return this.$store.state.articleType
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  data () {
    return {
      show: false,
      tags: [],
      classify: '',
      upload: api.upload,
      headers: {},
      autosave: true,
      form: {
        title: '',
        classify: '',
        content: '',
        cover: '',
        author: '',
        public: true,
        tag: ''
      }
    }
  },
  created () {
    // 从localstorage获取保存的草稿
    var article = JSON.parse(this.$localStorage.get('article'))
    if (article) {
      this.form = article
    }
    this.headers = {
      token: this.$localStorage.get('token')
    }
    this.$store.dispatch('ActionArticleTypeList', this)
  },
  methods: {
    onSuccess (res) {
      console.log(res)
      this.form.cover = res.path
    },
    onSubmit () {
      this.form.author = this.userInfo._id
      console.log(this.form)
      this.$store.dispatch('ActionPublishArticle', this)
      this.$localStorage.remove('article')
      this.$router.push(`/article?type=${this.form.classify}`)
    },
    onChange (data) {
      this.type.forEach((item, index) => {
        if (item.title === data) {
          this.form.classify = item._id
        }
      })
    },
    onClose (item) {
      var index = this.tags.indexOf(item)
      if (index > -1) {
        this.tags.splice(index, 1)
      }
    },
    onBlur (e) {
      if (this.tags.indexOf(e.target.value) < 0 && e.target.value) {
        this.tags.push(e.target.value)
        this.form.tag = this.tags.join(',')
      } else {
        this.$Message.warning('名称已经存在，请更换！')
      }
      e.target.value = ''
      return false
    },
    autoSave (v) {
      if (this.autosave) {
        this.$localStorage.set('article', JSON.stringify(this.form))
      }
      this.tags = this.form.tag.split(',')
    }
  },
  watch: {
    'form': {
      handler: 'autoSave',
      deep: true
    }
  }
}
</script>
<style lang="scss">
.publish{
  input{
    font-size:1.2rem;
    border:none;
    padding-left:0;
  }
}
.ivu-tag-border.ivu-tag-primary{
  height:30px;
  padding-top:3px;
}
.v-note-wrapper .v-note-op{
  border:none !important;
}
.v-note-wrapper .v-note-panel{
  border:none !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content{
  background:none !important;
}
</style>
