import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

}
