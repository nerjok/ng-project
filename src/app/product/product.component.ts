import { OnInit, Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../two/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  user: { id: string, name: string};
  paramsSubscription: Subscription;

  // @Output() deleteProduct = new EventEmitter<{id: string}>();


  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) {}


  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    removeProduct() {
      // this.deleteProduct.emit({id: this.user.id});
      this.productsService.removeProduct(this.user.id);
      this.productsService.statusUpdated.emit();

      this.router.navigate(['users']);

    }

    editProduct() {
      this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }
}