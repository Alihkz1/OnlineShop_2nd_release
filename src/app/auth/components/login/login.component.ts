import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  loginForm = new FormGroup({});
  model = {
    username: '',
    password: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'User Name',
        type: 'tel',
        placeholder: 'Enter your User name',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'password',
        type: 'password',
        placeholder: 'Enter your password.',
        required: true,
      },
    },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
   
  ) {}

  ngOnInit(): void {}
  onLogin() {
    this.authService
      .loginUser(this.model.username, this.model.password)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.authService.login = true;
          this.router.navigate(['/landing-page']);
          this._snackBar.open('Welcome', 'ok', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 2000,
          });
        },
        (error) => {
          this.router.navigate(['/register']);
        }
      );
  }
  onGoReg() {
    this.router.navigate(['/register']);
  }
  
}
