import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  model = {
    username: "",
    password: "",
  };
  fields: FormlyFieldConfig[] = [
    {
      key: "username",
      type: "input",
      templateOptions: {
        appearance: "outline",
        label: "User Name",
        type: "tel",
        placeholder: "Enter your User name",
        required: true,
      },
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        appearance: "outline",
        label: "password",
        type: "password",
        placeholder: "Enter your password.",
        required: true,
      },
    },
  ];

  constructor(private router: Router, 
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}
  onLogin() {
    this.authService
      .loginUser(this.model.username, this.model.password)
      .subscribe(
        (response: any) => {
          localStorage.setItem("token", response.token);
          this.authService.login = true;
          this.router.navigate(["/landing-page"]);

        },
        (error) => {
          this.router.navigate(["/register"]);
        }

      );
  }
  onGoReg(){
    this.router.navigate(['/register']);
  }
}
