<template>
  <div class="mid-layout component">
    <Form label-position="left" :label-width="80">
      <FormItem label="名称：">
        <Input v-model="form.title"/>
      </FormItem>
      <FormItem label="分类：">
        <RadioGroup type="button" @on-change="onChange">
          <Radio :label="item.title" v-for="(item, index) in type" :key="index"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="标签：">
        <Tag v-for="(item, index) in tags" :key="index" type="border" closable color="primary" @on-close="onClose(item)">{{item}}</Tag>
        <Input placeholder="标签" style="width: 200px" @on-blur="onBlur"/>
      </FormItem>
      <FormItem label="封面：">
        <Upload
          :action="api.upload"
          :headers="headers"
          :on-success="onSuccess">
          <Button icon="ios-cloud-upload-outline">上传封面</Button>
        </Upload>
      </FormItem>
      <FormItem label="操作方式：">
        <RadioGroup v-model="mode" type="button" style="margin-bottom:20px;">
          <Radio label="文件上传"></Radio>
          <Radio label="在线编辑"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="代码：">
        <Upload
          v-if="mode === '文件上传'"
          multiple
          type="drag"
          ref="code"
          name="code"
          :before-upload="beforeUpload1"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>请上传代码文件（例如xxx.js、xxx.vue、xxx.jsx、xxx.html）</p>
          </div>
        </Upload>
        <div style="height:400px;" v-else>
          <editor v-model="form.code" @init="editorInit" lang="html" theme="chrome" style="flex:1;" ref="javascript"></editor>
        </div>
      </FormItem>
      <FormItem label="演示example：">
        <Upload
          v-if="mode === '文件上传'"
          multiple
          type="drag"
          ref="example"
          name="example"
          :before-upload="beforeUpload2"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>请上传example事例！</p>
          </div>
        </Upload>
        <div style="height:400px;" v-else>
          <editor v-model="form.code" @init="editorInit" lang="html" theme="chrome" style="flex:1;" ref="javascript"></editor>
        </div>
      </FormItem>
      <FormItem label="使用文档：">
        <Upload
          v-if="mode === '文件上传'"
          multiple
          type="drag"
          name="document"
          :before-upload="beforeUpload3"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>请上传文档，markdown格式最佳！</p>
          </div>
        </Upload>
        <div style="height:500px;" v-else>
          <RadioGroup v-model="editor" type="button" style="margin-bottom:20px;">
            <Radio label="markdown"></Radio>
            <Radio label="可视化编辑器"></Radio>
          </RadioGroup>
          <mavon-editor v-if="editor === 'markdown'" class="flex-1" style="z-index:1;overflow:hidden;" v-model="form.document" :boxShadow="false" defaultOpen="edit" :ishljs="true"></mavon-editor>
          <quill-editor v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            v-else>
          </quill-editor>
        </div>
      </FormItem>
      <FormItem>
        <Button type="primary" size="large" @click="publish" style="width:200px;">发布</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import editor from 'vue2-ace-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  head: {
    title: {
      inner: '发布组件'
    }
  },
  components: {
    editor,
    quillEditor
  },
  computed: {
    type () {
      return this.$store.state.componentType
    },
    api () {
      return this.$store.state.api
    }
  },
  data () {
    return {
      mode: '文件上传',
      editor: 'markdown',
      classify: '',
      headers: {},
      form: {
        classify: '',
        title: '',
        cover: '',
        tag: '',
        code: '',
        example: '',
        document: '',
        author: ''
      },
      tags: [],
      editorOption: {}
    }
  },
  created () {
    this.$store.dispatch('ActionComponentType', this)
    this.headers = {
      token: this.$localStorage.get('token')
    }
  },
  methods: {
    onChange (data) {
      this.type.forEach((item, index) => {
        if (item.title === data) {
          this.form.classify = item._id
        }
      })
    },
    publish () {
      console.log(this.form)
      this.$store.dispatch('ActionAddComponent', this)
    },
    onSuccess (res) {
      this.form.cover = res.path
    },
    beforeUpload1 (params) {
      let _this = this
      var reader = new FileReader()
      reader.readAsText(params)
      reader.onload = function () {
        _this.form.code = reader.result
      }
      return false
    },
    beforeUpload2 (params) {
      let _this = this
      var reader = new FileReader()
      reader.readAsText(params)
      reader.onload = function () {
        _this.form.example = reader.result
      }
      return false
    },
    beforeUpload3 (params) {
      let _this = this
      var reader = new FileReader()
      reader.readAsText(params)
      reader.onload = function () {
        _this.form.document = reader.result
      }
      return false
    },
    editorInit: function (editor) {
      require('brace/ext/language_tools') //language extension prerequsite...
      require('brace/mode/html')                
      require('brace/mode/javascript')    //language
      require('brace/mode/less')
      require('brace/theme/chrome')
      require('brace/snippets/javascript') //snippet
      require(['emmet/emmet'],function (data) { // this is huge. so require it async is better
          window.emmet = data.emmet
      })
      editor.setFontSize(16)
      editor.getSession().setUseWrapMode(true)
      editor.getSession().setTabSize(2)
      console.log(editor)
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
    }
  }
}
</script>
<style lang="scss">
.ivu-tag-border.ivu-tag-primary{
  height:30px;
  padding-top:3px;
}
.component{
  padding:50px !important;
}
</style>
