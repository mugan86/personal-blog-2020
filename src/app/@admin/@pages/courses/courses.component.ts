import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

}
