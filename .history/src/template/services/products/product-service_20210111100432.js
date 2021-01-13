import {BaseService} from '../base/base-service';

export class ProductService extends BaseService {
  getAllProducts() {
    return fetch(`${this.baseUrl}products`).then((res) => res.json());
  }
}
