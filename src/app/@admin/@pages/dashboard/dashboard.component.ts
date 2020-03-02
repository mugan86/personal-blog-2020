import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private currentRouter: CurrentRouterService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.start();
    this.currentRouter.updateCurrentUrl(this.router.url);
    // console.log('pwppwpw', this.router.url);
  }
}
