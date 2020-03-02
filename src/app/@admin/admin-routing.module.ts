import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuardService } from '@core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: `admin`,
    component: AdminComponent,
    canActivateChild: [ AuthGuardService ],
    children: [
      // Por si introducimos "admin" solo para que vaya al dashboard
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
      },
      { path: 'dashboard', loadChildren: () => import('./@pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'publications', loadChildren: () => import('./@pages/publications/publications.module').then(m => m.PublicationsModule) },
      { path: 'courses', loadChildren: () => import('./@pages/courses/courses.module').then(m => m.CoursesModule) },
      { path: 'profile', loadChildren: () => import('./@pages/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'projects', loadChildren: () => import('./@pages/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'addpost', loadChildren: () => import('./@pages/add-post/add-post.module').then(m => m.AddPostModule) },
      { path: 'configurations', loadChildren: () =>
        import('./@pages/configurations/configurations.module').then(m => m.ConfigurationsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
