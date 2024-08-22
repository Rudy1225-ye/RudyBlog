import request from '@/request/request'

export const getArticleList = () => {
  return request.get('/articles?populate=*')
}

export const getArticleDetail = (id) => {
  return request.get(`/articles/${id}?populate=*`)
}
