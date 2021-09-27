import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../shared/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  shoppingList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public set setShoppingList(v: any) {
    this.shoppingList$.next(v);
  }

  public get getShoppingList(): Observable<any> {
    return this.shoppingList$.asObservable();
  }

  private products: Product[] = [
    {
      name: 'Willson Tennis Racket',
      description: 'Wilson Youth US Open Recreational Tennis Racket ',
      imagePath:
        'https://m.media-amazon.com/images/I/91qnp0TX8ML._AC_SL1500_.jpg',
      price: 90,
    },
    {
      name: 'Head Tennis Racket',
      description: 'HEAD Ti. Conquest Tennis Racket - Pre-Strung Head Light Balance 27 Inch Racquet - 4 3/8 In Grip',
      imagePath: 'https://m.media-amazon.com/images/I/81WRokY3vLL._AC_SL1500_.jpg',
      price: 79
    },
    {
      name: 'Green Wilson Tennis Racket',
      description: 'Tsitsipas usage',
      imagePath: 'https://m.media-amazon.com/images/I/81avphwlPnL._AC_SL1500_.jpg',
      price: 321
    },

    {
      name: 'RED Wilson Tennis Racket',
      description: 'Wilson Adult Recreational Tennis Racket - Size 4',
      imagePath: 'https://m.media-amazon.com/images/I/91MY4+9Mf+L._AC_SL1500_.jpg',
      price: 222
    },
    {
      name: 'yonex',
      description: 'YONEX Power Cushion Aerus 3 Mens Indoor Court Shoe',
      imagePath: 'https://m.media-amazon.com/images/I/613h+HkSQ1L._AC_SL1001_.jpg',
      price: 175
    },
    {
      name: 'yonex',
      description: 'YONEX Aerus3 Men Badminton Shoe-Red',
      imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61jMP4K230L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      price: 190
    },
    {
      name: 'yonex',
      description: 'YONEX Power Cushion Aerus 3 Mens Lightweight Indoor Shoes',
      imagePath: 'https://images-na.ssl-images-amazon.com/images/I/616agRQ02pS.__AC_SX300_SY300_QL70_FMwebp_.jpg',
      price: 165
    },
  ];

  constructor(private http: HttpClient) { }

  getData() {
    let token: any = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });
    return this.http.get('https://tavana-node.herokuapp.com/goods', {
      headers,
    });
  }

  onPost(name: string, description: string, imageUrl: string, price: any, count: any) {
    let token: any = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    let url = 'http://tavana-node.herokuapp.com/goods'
    return this.http.post(url, {
      name: name, description: description,
      imageUrl: imageUrl, price: price, count: count
    },{headers});
  }

  getItem(id: any) {
    let token: any = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    let url = 'https://tavana-node.herokuapp.com/goods/' + id;

    return this.http.get(url, {
      headers,
    });
  }

  getProducts() {
    return this.products.slice();
  }

  getProductId(index: number) {
    return this.products[index];
  }

}
