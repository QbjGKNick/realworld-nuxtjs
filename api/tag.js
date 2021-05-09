import { request } from "@/plugins/request"

export function getTags() {
    return request({
        url: '/api/tags',
        method: 'get'
    })
}