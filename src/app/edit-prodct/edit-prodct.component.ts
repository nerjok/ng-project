import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../two/products.service';

@Component({
  selector: 'app-edit-prodct',
  templateUrl: './edit-prodct.component.html',
  styleUrls: ['./edit-prodct.component.css']
})
export class EditProdctComponent implements OnInit {

  user: { id: string, name: string};
  oldId: string;
  paramsSubscription: Subscription;

  @Output() deleteProduct = new EventEmitter<{id: string}>();


  constructor(private route: ActivatedRoute, private productsService: ProductsService, private router: Router) {}


  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.oldId = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];

          this.oldId = params['id'];
        }
      );
    }

    onEditProduct() {
      this.productsService.editProduct(this.user, this.oldId);
      this.router.navigate(['users']);

    }
}
