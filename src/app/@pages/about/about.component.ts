import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentRouterService } from '@core/services/current-router.service';
import { ApiService } from '@core/graphql/services/api.service';
import { FRONTEND_BG_COLOR } from '@core/constants/styles';
import { Project } from '@pages/portfolio/project.interface';
import { TranslateConfigService } from '@core/services/translate-config.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  page = 'about.description';
  portfolioLast = 'portfolio.last';
  backgroundColor = FRONTEND_BG_COLOR;
  projects: Project[];
  loading: boolean;
  constructor(private translateService: TranslateConfigService, private router: Router, private currentRouter: CurrentRouterService,
              private api: ApiService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

  ngOnInit() {
    this.loading = true;
    this.api.getPortfolio('3').subscribe((data) => {
      this.projects = data.projects;
      this.loading = false;
    });
  }

}
