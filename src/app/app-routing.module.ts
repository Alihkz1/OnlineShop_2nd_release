import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AboutUsComponent } from './layout/components/about-us/about-us.component';
import { LandingPageComponent } from './layout/components/landing-page/landing-page.component';
import { ProductsDetailComponent } from './products/components/products-detail/products-detail.component';
import { ProductsComponent } from './products/components/products.component';
import { ProductsStartComponent } from './products/products-start.component';
import { ShoppingListComponent } from './products/components/shopping-list/shopping-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  //   children: [
  //     { path: '', component: ProductsStartComponent },
  //     { path: ':id', component: ProductsDetailComponent },
  //   ],
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
