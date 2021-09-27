import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';

import { ShoppingList } from '../../../shared/shopping-list.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Array<ShoppingList> = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    // console.log(this.shoppingList);

    this.productService.getShoppingList.subscribe((data) => {
      this.shoppingList.push(data);
    });
  }
}
