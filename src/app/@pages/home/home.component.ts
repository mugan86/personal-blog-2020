import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselItem } from '@core/components/carousel/carousel-item.interface';
import { Post } from '@core/interfaces/api.interface';
import { ApiService } from '@core/graphql/services/api.service';
import { TranslateConfigService } from '@core/services/translate-config.service';
import { Router } from '@angular/router';
import { SeoTitleMetaTagsAngularService } from 'seo-title-meta-tags-angular';
import { CurrentRouterService } from '@core/services/current-router.service';
import { PAGE_TITLE } from '@core/constants/seo';
import { FRONTEND_BG_COLOR } from '@core/constants/styles';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundColor = FRONTEND_BG_COLOR;
  carouselItems: CarouselItem[] = [];
  loading: boolean;
  posts: Post[] = [];
  important: Post;
  // Infinite Scroll
  finishPage: number;
  actualPage: number;
  showScrollHeight = 400;
  hideScrollHeight = 200;
  showGoUpButton: boolean;

  constructor(private translateService: TranslateConfigService,
              private api: ApiService, private seoTitleMetaTags: SeoTitleMetaTagsAngularService,
              private router: Router, private currentRouter: CurrentRouterService) {
                this.currentRouter.updateCurrentUrl(this.router.url);
                this.loading = true;
                this.actualPage = 1;
  }

  ngOnInit() {
    this.carouselItems.push({
      title: 'Introducción a GraphQL desde las bases hasta crear APIs',
      description: 'Primeros pasos con GraphQL: Lenguaje de manipulación y consulta de datos Open Source para API. ' + 
                    'Desarrollado por Facebook',
      background: 'https://miro.medium.com/max/2150/1*rZg1Kae1Xc8pDDbNqYMtyQ.png',
      url: 'https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/'
    });
    this.carouselItems.push({
      title: 'Angular PWA',
      description: 'Your Angular app as Progressive Web App',
      background: 'https://miro.medium.com/max/5184/1*g_B4JNulmfXSj0AyEjImyA.jpeg',
      url: 'https://medium.com/dev-jam/your-angular-app-as-progressive-web-app-e481043acf65'
    });
    this.carouselItems.push({
      title: 'Crear PDFs con HTML-PDF',
      description: 'Generar PDF desde NodeJS con la librería html-pdf',
      background: 'https://i.ytimg.com/vi/_EqYMNdbrsc/hqdefault.jpg',
      url: 'https://medium.com/@mugan86/generar-pdf-desde-nodejs-con-la-librer%C3%ADa-html-pdf-c8206b28c1b7'
    });
    this.carouselItems.push({
      title: 'Tips en APIs GraphQL',
      description: 'Limitando la profundidad de las consultas #1',
      background: 'https://miro.medium.com/max/1100/1*G5SHJcfMXtofKwJmQmlB2A.jpeg',
      url: 'https://medium.com/@mugan86/tips-graphql-limitando-la-profundidad-de-las-consultas-1-cd12f3e0b1ba'
    });
    this.api.getLastImportant().subscribe(important => {
      this.important = important;
      this.loadPosts();
    });
    this.seoTitleMetaTags.removeTags();
    const keywords = 'Udemy, Anartz Mugika, Angular 8, GraphQL, Personal Blog, Portfolio, Schema, Cursos Online, Tutoriales';
    const description = 'Cursos online Anartz Mugika en anartz-mugika.com';
    const author = 'mugan86, Anartz Mugika Ledo';
    this.seoTitleMetaTags.setTitlePage(PAGE_TITLE, 'Blog');
    this.seoTitleMetaTags.setMetaTags(keywords, description, author);
  }

  loadPosts() {
    this.api.getPosts(this.actualPage, 3).subscribe(data => {
      console.log(data);
      this.finishPage = data.info.pages;
      console.log(this.finishPage);
      // tslint:disable-next-line: only-arrow-functions
      this.posts =  [...this.posts, ...data.result.filter(function(post: any) {
        return post.important === false;
      })];
      this.loading = false;
    });
  }

  openPost(id: string) {
    this.router.navigate(['post', id]);
  }
  onScroll() {
    if (this.actualPage <= this.finishPage) {
      this.actualPage ++;
      this.loadPosts();
    }
  }
  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton &&
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

}
