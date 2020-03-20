import { Injectable, EventEmitter } from '@angular/core';

export interface Product {
  name: string;
  id: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { name: 'one', id: 'oneID'},
    { name: 'two', id: 'twoId'},
    { name: 'three', id: 'threeId'},
  ];

  statusUpdated = new EventEmitter<string>();


  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: string) {
    return this.products[0];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(id) {

    const products = this.products.filter((product: Product) => {
      console.log('[[ comparision ]]', product.id, id);

      return product.id !== id;
    });

    this.products = products;
  }

  editProduct(produc: Product, id) {
    const prod = this.products.find((product: Product) => product.id !== id);
    if (prod) {
      prod.name = produc.name;
      prod.id = produc.id;
    }
  }
}
