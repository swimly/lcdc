const type = `prod`
const url = type === 'dev' ? `http://127.0.0.1:3000` : `http://119.23.16.242:3000`
const api = {
  url: url,
  login: `${url}/login`,
  userInfo: `${url}/me`,
  articleType: `${url}/structure/list`,
  articleList: `${url}/article/list`,
  article: `${url}/article`,
  comments: `${url}/comments`,
  comment: `${url}/comment/add`,
  upload: `${url}/upload/file`,
  publishArticle: `${url}/article/add`,
  avatar: `${url}/upload/avatar`,
  structureList: `${url}/structure/list`,
  structure: `${url}/structure/add`
}
export default api
