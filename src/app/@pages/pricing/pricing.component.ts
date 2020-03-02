import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-princing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

  ngOnInit() {
  }

}
