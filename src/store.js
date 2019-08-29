import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: null,
    articleType: [],
    articles: [],
    article: null,
    commentList: [],
    structureList: [],
    componentType: [],
    components: [],
    api: api,
    logo: {
      image: '',
      title: 'LCDC'
    },
    navigator: [{
      label: '首页',
      router: '/index'
    }, {
      label: '文章',
      router: '/article'
    }, {
      label: 'web组件',
      router: '/component'
    }]
  },
  mutations: {
    // 用户登录
    MutationLogin (state, _this) {
      axios({
        method: 'post',
        url: api.login,
        data: _this.form
      }).then(res => {
        _this.res = res.data
        state.token = res.data.token
      })
    },
    // 通过token获取用户信息
    MutationMe (state, _this) {
      axios({
        method: 'get',
        url: api.userInfo,
        headers: {
          token: _this.$localStorage.get('token')
        }
      }).then(res => {
        state.userInfo = res.data.data
        if (!res.data.status) {
          _this.$Message.error('获取权限失败，请重新登录！')
          _this.$router.replace('/login')
        }
      })
    },
    // 获取文章分类
    MutationArticleTypeList (state, _this) {
      axios({
        url: api.articleType,
        method: 'get',
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          topic: 'article'
        }
      }).then(res=>{
        state.articleType = res.data.data
      })
    },
    // 获取文章列表
    MutationArticleList (state, _this) {
      axios({
        method: 'get',
        url: api.articleList,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          classify: _this.form.classify,
          page: _this.form.page,
          pagesize: _this.form.pagesize,
          total: _this.form.total
        }
      }).then(res => {
        state.articles = res.data.data.list
      })
    },
    // 获取文章详情
    MutationArticle (state, _this) {
      state.article = {}
      axios({
        method: 'get',
        url: api.article,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          id: _this.form.id
        }
      }).then(res => {
        state.article = res.data.data
      })
    },
    // 获取评论列表
    MutationCommentList (state, _this) {
      axios({
        method: 'get',
        url: api.comments,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          relation: _this.form.id
        }
      }).then(res => {
        state.commentList = res.data.data
      })
    },
    // 发表评论
    MutationComment (state, _this) {
      axios({
        method: 'post',
        url: api.comment,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: {
          classify: _this.form.classify,
          relation: _this.form.relation,
          parentId: _this.form.parentId,
          content: _this.form.content,
          author: _this.form.author
        }
      }).then(res => {
        return res.data.data
      })
    },
    // 发布文章
    MutationPublishArticle (state, _this) {
      axios({
        method: 'post',
        url: api.publishArticle,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: _this.form
      }).then(res => {
      })
    },
    // 上传头像
    MutationUpdateAvatar (state, _this) {
      axios({
        method: 'post',
        url: api.avatar,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: {
          base64: _this.form.avatar
        }
      }).then(res => {
      })
    },
    // 获取组织架构
    MutationStructureList (state, _this) {
      axios({
        method: 'get',
        url: api.structureList,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          topic: 'user'
        }
      }).then(res => {
        state.structureList = res.data.data
      })
    },
    // 添加组织架构
    MutationAddStructure (state, _this) {
      var params = {
        title: _this.form.title,
        topic: 'user'
      }
      if (_this.form.parentId) {
        params.parentId = _this.form.parentId
      }
      axios({
        method: 'post',
        url: api.structure,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: params
      }).then(res => {
      })
    },
    // 添加文章分类
    MutationAddArticleType (state, _this) {
      var params = {
        title: _this.form.title,
        topic: 'article'
      }
      if (_this.form.parentId) {
        params.parentId = _this.form.parentId
      }
      axios({
        method: 'post',
        url: api.structure,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: params
      }).then(res => {
        console.log(res)
      })
    },
    // 获取组件分类
    MutationComponentType (state, _this) {
      axios({
        method: 'get',
        url: api.structureList,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          topic: 'component'
        }
      }).then(res => {
        state.componentType = res.data.data
      })
    },
    // 添加组件分类
    MutationAddComponentType (state, _this) {
      var params = {
        title: _this.form.title,
        topic: 'component'
      }
      if (_this.form.parentId) {
        params.parentId = _this.form.parentId
      }
      axios({
        method: 'post',
        url: api.structure,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: params
      }).then(res => {
      })
    },
    // 添加组件
    MUtationAddComponent (state, _this) {
      axios({
        method: 'post',
        url: api.component,
        headers: {
          token: _this.$localStorage.get('token')
        },
        data: _this.form
      }).then(res => {
        console.log(res)
      })
    },
    // 获取组件列表
    MutationComponentList (state, _this) {
      axios({
        method: 'get',
        url: api.componentList,
        headers: {
          token: _this.$localStorage.get('token')
        },
        params: {
          classify: _this.form.classify,
          page: _this.form.page,
          pagesize: _this.form.pagesize,
          total: _this.form.total
        }
      }).then(res => {
        state.components = res.data.data.list
      })
    }
  },
  actions: {
    // 组件列表
    ActionComponentList ({commit}, _this) {
      commit('MutationComponentList', _this)
    },
    // 添加组件
    async ActionAddComponent ({commit}, _this) {
      commit('MUtationAddComponent', _this)
    },
    // 获取组件分类
    async ActionComponentType ({commit}, _this) {
      commit('MutationComponentType', _this)
    },
    async ActionAddComponentType ({commit, dispatch}, _this) {
      commit('MutationAddComponentType', _this)
    },
    async ActionAddComponentTypeUpdate ({commit, dispatch}, _this) {
      return dispatch('ActionAddComponentType', _this).then(() => {
        commit('MutationComponentType', _this)
      })
    },
    // 添加组织架构
    async ActionArticleType ({commit}, _this) {
      commit('MutationAddArticleType', _this)
    },
    async ActionArticleTypeUpdate ({commit, dispatch}, _this) {
      return dispatch('ActionArticleType', _this).then(() => {
        commit('MutationStructureList', _this)
      })
    },
    // 添加组织架构
    async ActionStructure ({commit}, _this) {
      commit('MutationAddStructure', _this)
    },
    async ActionStructureUpdate ({commit, dispatch}, _this) {
      return dispatch('ActionStructure', _this).then(() => {
        commit('MutationStructureList', _this)
      })
    },
    // 获取组织架构
    async ActionStructureList ({commit}, _this) {
      commit('MutationStructureList', _this)
    },
    // 上传头像
    async ActionUpdateAvatar ({commit}, _this) {
      commit('MutationUpdateAvatar', _this)
    },
    // 上传头像并更新资料
    async ActionUpdateAvatarReload ({commit, dispatch}, _this) {
      return dispatch('ActionUpdateAvatar', _this).then(() => {
        commit('MutationMe', _this)
        _this.$Message.success('头像更换成功！')
      })
    },
    // 发布文章
    async ActionPublishArticle ({commit}, _this) {
      commit('MutationPublishArticle', _this)
    },
    // 发表评论
    async ActionComment ({commit}, _this) {
      commit('MutationComment', _this)
    },
    // 发表评论并更新评论列表
    async ActionCommentUpdate ({dispatch, commit}, _this) {
      return dispatch('ActionComment', _this).then(() => {
        commit('MutationCommentList', _this)
      })
    },
    // 文章详情
    async ActionArticle ({commit}, _this) {
      commit('MutationArticle', _this)
    },
    // 评论列表
    async ActionCommentList ({commit}, _this) {
      commit('MutationCommentList', _this)
    },
    // 获取文章详情&评论列表
    async ActionArticlePage ({dispatch, commit}, _this) {
      return dispatch('ActionArticle', _this).then(() => {
        commit('MutationCommentList', _this)
      })
    },
    // 文章分类列表
    async ActionArticleTypeList ({commit}, _this) {
      commit('MutationArticleTypeList', _this)
    },
    // 文章列表页
    async ActionArticles ({commit, dispatch}, _this) {
      return dispatch('ActionArticleTypeList', _this).then(() => {
        commit('MutationArticleList', _this)
      })
    },
    // 登录
    async ActionLogin ({dispatch, commit, state}, _this) {
      commit('MutationLogin', _this)
    },
    // 获取登录信息
    async ActionMe ({dispatch, commit}, _this) {
      commit('MutationMe', _this)
    },
    // 登录并且获取信息
    async ActionLoginIn ({dispatch, commit, state}, _this) {
      await dispatch('ActionLogin', _this)
      var timer = setInterval(()=>{
        if (state.token) {
          commit('MutationMe', _this)
          _this.$localStorage.set('token', state.token)
          clearInterval(timer)
        }
      }, 100)
    }
  }
})
