import { request } from '@/plugins/request'

// 获取公共的文章列表
export const getArticles = (params) => {
  return request({
    method: 'get',
    url: '/api/articles',
    params
  })
}

// 获取关注的用户文章列表
export const getFeedArticles = (params) => {
  return request({
    method: 'get',
    url: '/api/articles/feed',
    // // Authorization: Token jwt.token.here
    // headers: {
    //   // 注意数据格式：Token空格数据Token
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY2MDM4LCJ1c2VybmFtZSI6IkdLTmljayIsImV4cCI6MTYyNTYxOTQxMX0.dSPtgIKnPcukeyUlJWzKKKywj0-5NKw9R0xQ7mk7Ihk`
    // },
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'delete',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}`
  })
}


// 发表文章评论
export const postComments = (slug, data) => {
  return request({
    method: 'post',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'get',
    url: `/api/articles/${slug}/comments`
  })
}