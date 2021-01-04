import BaseApi from './BaseApi';

class CategoryApi extends BaseApi {
  create(data: any) {
    return this.postWithAutoKey('categories', data);
  }

  update(id: string, data: any) {
    return this.post('categories', id, data);
  }

  getCategory(id: string) {
    return this.getOne('categories', id);
  }

  getCategories(params?: any) {
    return this.get('categories');
  }
}

export default new CategoryApi;
