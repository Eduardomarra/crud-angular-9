import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './Navigation/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';


import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductCrudComponent } from './Products/pages/product-crud/product-crud.component';
import { ProductCreateComponent } from './Products/pages/product-create/product-create.component'



@NgModule({
  declarations: [NavComponent, HomeComponent, ProductCrudComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule
  ],
  exports: [
    NavComponent
  ]
})
export class FeaturesModule { }
