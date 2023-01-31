import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/components/home/home.component';
import { ProductCreateComponent } from './features/Products/pages/product-create/product-create.component';
import { ProductCrudComponent } from './features/Products/pages/product-crud/product-crud.component'
import { ProductDeleteComponent } from './features/Products/pages/product-delete/product-delete.component';
import { ProductUpdateComponent } from './features/Products/pages/product-update/product-update.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
