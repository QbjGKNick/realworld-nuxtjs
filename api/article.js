import request from "@/utils/request"

// 获取公共的文章列表
export const getArticles = params => {
    return request({
        method: 'get',
        url: '/api/articles',
        params
    })
}