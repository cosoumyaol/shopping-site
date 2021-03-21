import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';
import { ProgTestComponent } from './prog-test/prog-test.component';

const routes: Routes = [
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'add',component:AddNewProductComponent},
  {path:'home',component:AllProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'test',component:ProgTestComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

