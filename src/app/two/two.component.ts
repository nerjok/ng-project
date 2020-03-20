import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  productItems: Product[] = [];
  productName: string = 'ProductName';
  productId: string = '';

  constructor(private productsService: ProductsService, router: Router) {
    router.events.subscribe(e => {
        // console.log(e)
    });
  }
  ngOnInit(): void {
    this.productItems = this.productsService.getProducts();

    this.productsService.statusUpdated.subscribe(value => {
console.log('[[ updatedService ]]', value);
this.productItems = this.productsService.getProducts();

    });

  }

  onAddProduct() {
    console.log('[[ AddProduct ]]', this.productName, this.productId);
    this.productsService.addProduct({
                                      name: this.productName,
                                      id: this.productId,
                                    });
    this.productName = '';
    this.productId = '';
  }

  onRootEvent(evt) {
    console.log(evt);
  }
}
