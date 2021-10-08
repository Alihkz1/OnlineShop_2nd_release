import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../../shared/products.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products-post',
  templateUrl: './products-post.component.html',
  styleUrls: ['./products-post.component.css'],
})
export class ProductsPostComponent implements OnInit {
  PostForm = new FormGroup({});
  model = {
    name: '',
    imageUrl: '',
    description: '',
    price: '',
    count: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'Name',
        type: 'name',
        placeholder: 'Enter name',
        required: true,
      },
    },
    {
      key: 'imageUrl',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'image Url',
        placeholder: 'enter url',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'description',
        type: 'description',
        placeholder: 'Enter desc',
        required: true,
      },
    },
    {
      key: 'price',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'price',
        type: 'price',
        placeholder: 'Enter price',
        required: true,
      },
    },
    {
      key: 'count',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'count',
        type: 'count',
        placeholder: 'Enter count',
        required: true,
      },
    },
  ];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {}
  onPostData() {
    this.productsService
      .onPost(
        this.model.name,
        this.model.description,
        this.model.imageUrl,
        this.model.price,
        this.model.count
      )
      .subscribe(
        (response: any) => {
          //console.log(response);
          this.snackBar.open('your item add', 'ok', {
            duration: 1000,
          });
          this.router.navigate(['/login']);
          localStorage.setItem('token', response.token);
        },
        (error) => {
          // console.log(error);
          this.snackBar.open('error', 'ok', {
            duration: 1000,
          });
          this.router.navigate(['/products']);
        }
      );
  }
  onClearForm() {
    this.PostForm.reset();
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
