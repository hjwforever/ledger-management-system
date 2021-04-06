import request from '@/utils/request'
import _request from 'axios';

// 登录方法
export function login (loginForm) {
  if (loginForm == null || loginForm =={}) {
    loginForm = {
      username: 'test',
      password: '123456'
    }
  }
  return request({
    url: '/user/login',
    method: 'post',
    data: loginForm
  })
}

// 获取用户信息
export function userInfo () {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function getDemo() {
  return _request.get(process.env.VUE_APP_USER_URL);
}

export function getAvatar() {
  return _request.get('https://api.uomg.com/api/rand.avatar?format=json');
}
