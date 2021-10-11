import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../shared/auth.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({});
  model = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'User Name',
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
        placeholder: 'at least 8 characters',
        required: true,
      },
    },
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'First Name',
        placeholder: 'Enter your First name',
        required: true,
      },
    },
    {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'last Name',
        type: 'name',
        placeholder: 'Enter your last name',
        required: true,
      },
    },
    {
      key: 'phoneNumber',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'phone Number',
        type: 'tel',
        placeholder: 'Enter your phone number',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        appearance: 'outline',
        label: 'email Adress',
        type: 'email',
        placeholder: 'example@email.com',
        required: true,
      },
    },
  ];
  constructor(private router: Router, private authService: AuthService,
    private dialog: MatDialog) {}

  ngOnInit(): void {}
  onReg() {
    this.authService
      .registerUser(
        this.model.username,
        this.model.password,
        this.model.firstName,
        this.model.lastName,
        this.model.phoneNumber,
        this.model.email
      )
      .subscribe(
        (response: any) => {
          this.router.navigate(['/main']);
        }
        // (error) => {

        // }
      );
  }
  onGoLog() {
    this.router.navigate(['/login']);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

