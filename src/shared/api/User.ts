import BaseApi from './BaseApi';

class UserApi extends BaseApi {
  create(data?: any) {
    return this.post('posts', data);
  }
}

export default UserApi;
