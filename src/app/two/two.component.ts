import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './two.actions';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  productItems: Product[] = [];
  productName: string = 'ProductName';
  productId: string = '';
  items: Observable<{items: {title: string}[]}>;

  constructor(private productsService: ProductsService,
              private store: Store<{twoItems: {items: {title: string;}[]}}>,
              router: Router) {
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

    this.items = this.store.select('twoItems');
  }

  onAddProduct() {
    console.log('[[ AddProduct ]]', this.productName, this.productId);
    this.productsService.addProduct({
                                      name: this.productName,
                                      id: this.productId,
                                    });

    this.store.dispatch(new actions.AddIngredient({title: this.productName}));

    this.store.dispatch(new actions.AddIngredients([
                                                    {title: this.productName+'00'},
                                                    {title: this.productName+'01'},
                                                  ]));

    this.productName = '';
    this.productId = '';
  }

  onRootEvent(evt) {
    console.log(evt);
  }
}
