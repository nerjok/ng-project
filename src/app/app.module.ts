import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsResolver } from './two/products-resolver.service';
import { ProductsService } from './two/products.service';
import { EditProdctComponent } from './edit-prodct/edit-prodct.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { AdDirective } from './shared/ad.directive';
import { StoreModule } from '@ngrx/store';
import { twoReducer } from './two/two.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TestComponentComponent,
    OneComponent,
    TwoComponent,
    ErrorPageComponent,
    EditProdctComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    AdDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({twoItems: twoReducer})
  ],
  providers: [ProductsResolver, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
