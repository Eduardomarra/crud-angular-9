import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './Navigation/nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import {MatTableModule} from '@angular/material/table';

import { ProductCrudComponent } from './Products/pages/product-crud/product-crud.component';
import { ProductCreateComponent } from './Products/pages/product-create/product-create.component'

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './Products/pages/product-update/product-update.component';
import { ProductDeleteComponent } from './Products/pages/product-delete/product-delete.component'

registerLocaleData(localePt);

@NgModule({
  declarations: [NavComponent, HomeComponent, ProductCrudComponent, ProductCreateComponent, ProductUpdateComponent, ProductDeleteComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    NavComponent
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }]
})
export class FeaturesModule { }
