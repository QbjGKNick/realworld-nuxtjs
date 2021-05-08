import request from '@/utils/request'

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
    // Authorization: Token jwt.token.here
    headers: {
      // 注意数据格式：Token空格数据Token
      Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY2MDM4LCJ1c2VybmFtZSI6IkdLTmljayIsImV4cCI6MTYyNTYxOTQxMX0.dSPtgIKnPcukeyUlJWzKKKywj0-5NKw9R0xQ7mk7Ihk`
    },
    params
  })
}
