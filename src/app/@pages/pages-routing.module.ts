import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: ``,
    component: PagesComponent,
    children: [
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
      { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
      { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
      { path: 'portfolio-one-column', loadChildren: () => import('./portfolio/one-col/one-col.module').then(m => m.OneColModule) },
      { path: 'portfolio-two-column', loadChildren: () => import('./portfolio/two-col/two-col.module').then(m => m.TwoColModule) },
      {
        path: 'portfolio-three-column',
        loadChildren: () => import('./portfolio/three-col/three-col.module').then(m => m.ThreeColModule)
      },
      { path: 'portfolio-four-column', loadChildren: () => import('./portfolio/four-col/four-col.module').then(m => m.FourColModule) },
      { path: 'portfolio-single', loadChildren: () => import('./portfolio/item/item.module').then(m => m.ItemModule) },
      { path: 'blog-home-1', loadChildren: () => import('./blog/home-one/home-one.module').then(m => m.HomeOneModule) },
      { path: 'blog-home-2', loadChildren: () => import('./blog/home-two/home-two.module').then(m => m.HomeTwoModule) },
      { path: 'blog-post', loadChildren: () => import('./blog/post/post.module').then(m => m.PostModule) },
      { path: 'full-width', loadChildren: () => import('./full-width/full-width.module').then(m => m.FullWidthModule) },
      { path: 'faq', loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule) },
      { path: 'sidebar', loadChildren: () => import('./sidebar/sidebar.module').then(m => m.SidebarModule) },
      // All your other routes should come first
      { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)},
      { path: '**', pathMatch: 'full', redirectTo: '404' }
    ]
  }
];

// portfolio-one-column

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
