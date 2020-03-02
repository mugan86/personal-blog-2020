import { Component, OnInit } from '@angular/core';
import { CurrentRouterService } from '@core/services/current-router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent {
  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }
}
