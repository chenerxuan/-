import request from '@/utils/request.js'

// 注意 下面的接口调用只是演示 因为服务器没有提供/user接口
export const getUserInfoAPI = function(_page, _limit) {
  return request.get('/user')
}
