import { Component, OnInit } from '@angular/core';
import { Course } from './courses.interface';
import { TranslateConfigService } from '@core/services/translate-config.service';
import { ApiService } from '@core/graphql/services/api.service';
import { SeoTitleMetaTagsAngularService } from 'seo-title-meta-tags-angular';
import { config } from 'process';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  loading: boolean;
  courses: Course[] = [];
  constructor(private translateService: TranslateConfigService,
              private api: ApiService,
              private seoTitleMetaTags: SeoTitleMetaTagsAngularService) {
    this.loading = true;
    this.api.getCourse().subscribe(data => {
      this.loading = false;
      this.courses = data;
    });

    this.seoTitleMetaTags.removeTags();
    const keywords = 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio, Angular, JWT';
    const description = 'Cursos online al mejor precio con Anartz Mugika Ledo';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage('Anartz Mugika Ledo', 'Cursos Online al mejor precio');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

}
