import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductsStartComponent } from './products-start.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductsPostComponent } from './components/products-post/products-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
const routes: Routes = [
  {
    path: '',
    component: ProductsStartComponent,
    children: [
      {
        path: 'list',
        component: ProductsComponent,
      },
      {
        path: 'detail/:id',
        component: ProductsDetailComponent,
      },
      {
        path: 'post',
        component: ProductsPostComponent,
      },
      {
        path: '**',
        component: ProductsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsStartComponent,
    ShoppingListComponent,
    ProductsPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    IvyCarouselModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MatProgressBarModule,
    RouterModule.forChild(routes),
  ],
  exports: [ProductsComponent, ProductsDetailComponent, ProductsListComponent],
})
export class ProductsModule {}
