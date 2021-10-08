import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/products.service';
import { Product } from '../../../shared/products.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../../auth/shared/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  product: any;
  id: number;
  addedToShoppingList: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getDetail();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProductId(this.id);
    });
  }
  onAddToList() {
    this.addedToShoppingList = !this.addedToShoppingList;
    this.productService.shopCard$.next(this.product);
    this.snackBar.open('added to shopping-list', 'ok', {
      duration: 1000,
    });
    // } else {
    //   this.snackBar.open('ابتدا وارد حساب کاربری بشوید!', 'ok', {
    //     duration: 1000,
    //   });
    //   setTimeout(() => {
    //     this.router.navigate(['login']);
    //   }, 1000);
    // }
  }

  onBack() {
    this.router.navigate(['products']);
  }
  onSee() {
    this.snackBar.open('به بالای صفحه بروید', 'ok');
  }

  getDetail() {
    const { id } = this.route.snapshot.params;
    // console.log(id);
    this.productService.getItem(id).subscribe((data) => {
      // console.log(data);
      this.product = data;
    });
  }
}
