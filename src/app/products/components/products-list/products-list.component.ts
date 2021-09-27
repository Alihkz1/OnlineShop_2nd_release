import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: any;
  @Input() index: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void { }
}
