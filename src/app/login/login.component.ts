import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../model/auth.model';
import { UserModel } from '../model/user.mode';
import { AuthService } from '../serviceses/auth.service';
import { LoginService } from '../serviceses/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,
    private authService: AuthService,
    private router: Router) { }

  user!: UserModel;

  ngOnInit(): void {
    this.user = new UserModel();
    this.user.username = "info@karmatech.in";
    this.user.password = "karma@123";
  }

  login() {
    this.loginService.login(this.user).subscribe((res: any) => {
      let authData = new AuthData();
      authData.userDetails = this.user;
      authData.token = res.access_token;
      this.authService.setAuthData(authData);
      this.user = new UserModel();
      this.router.navigate(['/root']);
    }, err => {
      alert("Invalid credentials")
    });
  }
}
