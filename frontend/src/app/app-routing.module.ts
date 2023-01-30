import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/components/home/home.component';
import { ProductCreateComponent } from './features/Products/pages/product-create/product-create.component';
import { ProductCrudComponent } from './features/Products/pages/product-crud/product-crud.component'


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
