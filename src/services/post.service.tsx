import api from './api';
import { iPostData } from '~type/IPost.type';
class PostService {
  basePrefix = 'posts';

  getAll() {
    return api.get<Array<iPostData>>(`${this.basePrefix}`);
  }

  getSinglePostService(id: number) {
    return api.get<iPostData>(`${this.basePrefix}/${id}`);
  }
}

export default new PostService();
