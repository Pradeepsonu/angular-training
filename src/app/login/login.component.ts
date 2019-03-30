import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  success;
  text;
  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit() {
  }
  // login() {

  //   if (this.username === "admin" && this.password === "admin@123") {
  //     this.success = true;
  //     this.router.navigate(["dashboard"])
  //     this.text = "Successfully logged In"
  //   }
  //   else {
  //     this.success = false;
  //     this.text = "Invalid credentials"
  //   }
  //   console.log(this.username, " ", this.password);
  // }
  async login() {
    const isValid: Boolean = await this.authservice.login(this.username, this.password);
    if (isValid) {
      this.text = "Success login"
      this.router.navigate(['dashboard'])
    }
    else {
      this.success = false;
      this.text = "Invalid Credentials"
    }
  }
}
