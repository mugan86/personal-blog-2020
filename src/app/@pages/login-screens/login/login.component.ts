import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/graphql/services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { LoginResult, LoginData } from './login.interface';
import { MeData } from '@core/interfaces/me-data.interface';
import { CurrentRouterService } from '@core/services/current-router.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginData = {
    email: '',
    password: ''
  };
  sendData: boolean;
  error: boolean;
  show = false;
  constructor(private api: ApiService, private router: Router, private auth: AuthService,
              private currentRouter: CurrentRouterService) {
      this.currentRouter.updateCurrentUrl(this.router.url);
      this.auth.userVar$.subscribe((data: any) => {
      console.log(data);
      if (data === null || data === false) {
        this.show = true;
        window.localStorage.removeItem('tokenJWT');
        console.log('login not ok');
      } else {
        console.log(data);
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnInit() {
    this.auth.start();
  }

  login() {
    // console.log(this.user);
    this.sendData = true;
    this.show = false;
    this.api.login(this.user.email, this.user.password).subscribe( (result: LoginResult) => {
      if (result.status) {
        this.error = false;
        localStorage.setItem('tokenJWT', result.token);
        console.log('login correcto');
        this.auth.updateStateSession(true);
        this.router.navigate(['/home']);
      } else {
        this.error = true;
        this.show = true;
        this.auth.updateStateSession(false);
        localStorage.removeItem('tokenJWT');
        console.log('login incorrecto');
        this.sendData = false;
      }
    });
  }

}
