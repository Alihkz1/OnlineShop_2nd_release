import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'onlineshop';
  constructor(private router: Router) {
    let token = localStorage.getItem('token');
    if (token == null || token == undefined || token == '') {
      this.router.navigate(['login']);
    }
  }
}
