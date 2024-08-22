import request from '@/request/request'
export const getChannelList = () => {
  return request.get('/channels?populate=*')
}

export const getChannelDetail = (id) => {
  return request.get(`/channels/${id}?populate=*`)
}