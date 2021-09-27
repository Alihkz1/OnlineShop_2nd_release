import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(public authService: AuthService,
  private router: Router,
  private route: ActivatedRoute,
  private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token!= null || token != undefined || token != '') {
      this.loggedIn = true;
    }
    this.authService.isLoggedIn.subscribe(res =>{
      this.loggedIn = res ;
    })
  }
 
  onLogOut() {

    this.router.navigate(['/login']);
    this.snackBar.open('Logged out','ok',{ 
      duration: 1000
  })
  this.authService.login = false;
  localStorage.removeItem('token');

  }

  
  onShoppingList() {
    this.router.navigate(['shopping-list'], {relativeTo: this.route});
  }
}
