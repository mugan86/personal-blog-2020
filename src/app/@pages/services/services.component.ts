import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

  ngOnInit() {
  }

}
