import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OderListComponent } from './oder-list/oder-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

const routes : Routes =[
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'user-profile',
        component: ProfileComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'oder-list',
        component: OderListComponent
      }
    ]
  }
]


@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ProductListComponent, CartComponent, OderListComponent, CheckoutComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
