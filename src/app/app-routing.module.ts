import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ProductComponent } from './product/product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EditProdctComponent } from './edit-prodct/edit-prodct.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '', component: OneComponent },
    {
        path: 'users',
        component: TwoComponent,
        canActivate: [AuthGuard],
        children: [
            { path: ':id/:name', component: ProductComponent },
            { path: ':id/:name/edit', component: EditProdctComponent },
        ],
    },
    // {
    //   path: 'servers',
    //   // canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard],
    //   component: ServersComponent,
    //   children: [
    //   { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    //   { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    // ] },
    { path: 'tform', canActivate: [AuthGuard], component: TemplateFormComponent },
    { path: 'reactiveform', canActivate: [AuthGuard], component: ReactiveFormComponent },
    { path: 'auth', component: AuthComponent },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: { message: 'Page not found!' },
    },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
