import { Component, OnInit, Input } from '@angular/core';
import { NavbarMenuItem } from './navbar.interface';
import { AuthService } from '@core/services/auth.service';
import { MeData } from '@core/interfaces/me-data.interface';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() menuItems: NavbarMenuItem[];
  @Input() mainItem: NavbarMenuItem;
  @Input() backgroundColor: string;
  loginUserAdmin = false;
  currenRoute: string;
  constructor(private auth: AuthService, private currentRoute: CurrentRouterService) {
    this.currentRoute.currentUrl$.subscribe((url: string) => {
      this.currenRoute = url;
      console.log(this.currenRoute);
    });
  }
  ngOnInit() {
    this.auth.userVar$.subscribe((data: MeData) => {
      if (data.status === false) {
        this.loginUserAdmin = false;
      } else {
        console.log(data);
        if (data.user.role.name === 'SUPER' || data.user.role.name === 'ADMIN') {
          this.loginUserAdmin = true;
          console.log('ok!!!');
        } else {
          this.loginUserAdmin = false;
        }
      }
    });
  }

  logout() {
    this.auth.logout();
    this.auth.updateStateSession(false);
    this.loginUserAdmin = false;
  }

}
