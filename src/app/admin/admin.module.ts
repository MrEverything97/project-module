import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },

      {
        path: 'product-add',
        component: ProductAddComponent
      },

      {
        path: 'product-update',
        component: ProductUpdateComponent
      },

      {
        path: 'user-list',
        component: UserListComponent
      }
    ]
  }
]



@NgModule({
  declarations: [ProductAddComponent, ProductListComponent, ProductUpdateComponent, UserListComponent, HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
