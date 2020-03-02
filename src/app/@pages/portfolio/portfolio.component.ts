import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '@core/services/translate-config.service';
import { SeoTitleMetaTagsAngularService } from 'seo-title-meta-tags-angular';
import { ApiService } from '@core/graphql/services/api.service';
import { Project } from './project.interface';
import { FRONTEND_BG_COLOR } from '@core/constants/styles';
import { PAGE_TITLE } from '@core/constants/seo';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  backgroundColor = FRONTEND_BG_COLOR;
  projects: Project[];
  important: Project;
  loading: boolean;
  constructor(private translateService: TranslateConfigService,
              private seoTitleMetaTags: SeoTitleMetaTagsAngularService, private api: ApiService) { }

  ngOnInit() {
    this.loading = true;
    this.seoTitleMetaTags.removeTags();
    const keywords = 'proyectos, Anartz Mugika, android, angular, librerías, cursos, sugerencias de contenido';
    const description = 'Lista de los proyectos en los que he trabajado';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage(PAGE_TITLE, 'Proyectos');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);

    this.api.getPortfolio('3').subscribe((data) => {
      this.projects = data.projects;
      this.important = data.project;
      this.loading = false;
    });
  }

}
