import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart/cart.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
]

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, ProductListComponent,CartComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GuestModule { }
