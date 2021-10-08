import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/products.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // @Input() products: Product[];
  products: any[] = [];
  show :boolean = false ; 
  allowButt = false
  images = [
    { path: 'https://wi.wallpapertip.com/wsimgs/81-810604_ida1488-minimalist-phone-wallpaper-4k.jpg' },
    { path: 'https://appagg.co/ii/000/033/981/33981242.jpg' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPjX2FAL3IbRwYmQwoVjvNbuQ0dmvELh-FuPaWJ8fOIzTaYwa09nevbyTRWw3WUnskYg&usqp=CAU' },
    { path: 'https://wallpaperaccess.com/full/2222663.jpg' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4wFABaWXFohbivI82KPBFCDGQS5YQanKCA&usqp=CAU' },
    { path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMWUhSrsND83Gqh1x_j1BHa54vwh3MfFN4_pOa-fWupRi0x6gz9dOARRvmlbEnZHWBVo&usqp=CAU' },
    { path: 'https://wallpaperaccess.com/full/1719691.jpg' },
    { path: 'https://wallpaperaccess.com/full/1159905.jpg' },

  ]
  constructor(private productService: ProductsService,
    private router: Router
  ) { 
    setTimeout(() => {
      this.allowButt = true
    }, 2000);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.getProduct();
    let token = localStorage.getItem('token') ; 
    if (token){
      this.show = true ; 
  }

}
  getProduct() {
    this.productService.getData().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    });
  }
  toPostPage() {
    this.router.navigate(['/post']);
  }
 

}
