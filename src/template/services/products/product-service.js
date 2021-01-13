import {BaseService} from '../base/base-service';

export class ProductService extends BaseService {
  getAllProducts(limit) {
    if (limit) {
      return fetch(`${this.baseUrl}products?limit=${limit}`).then((res) =>
        res.json(),
      );
    }
    return fetch(`${this.baseUrl}products`).then((res) => res.json());
  }
}
