import { Component, OnInit } from '@angular/core';
import { NavbarMenuItem } from '@core/components/shared/navbar/navbar.interface';
import { AuthService } from '@core/services/auth.service';
import { MeData } from '@core/interfaces/me-data.interface';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user;
  showContent;
  mainItem: NavbarMenuItem = {
    title: 'Anartz Mugika Ledo',
    link: '/home',
    submenus: []
  };
  menuItems: NavbarMenuItem[] = [
    {
      title: 'Home',
      link: '/home',
      submenus: []
    },
    {
      title: 'About',
      link: '/about',
      submenus: []
    },
    {
      title: 'Services',
      link: '/services',
      submenus: []
    },
    {
      title: 'Contact',
      link: '/contact',
      submenus: []
    },
    {
      title: 'Portfolio',
      link: '*',
      submenus: [
        {
          title: '1 Column',
          link: '/portfolio-one-column',
          submenus: []
        },
        {
          title: '2 Column',
          link: '/portfolio-two-column',
          submenus: []
        },
        {
          title: '3 Column',
          link: '/portfolio-three-column',
          submenus: []
        },
        {
          title: '4 Column',
          link: '/portfolio-four-column',
          submenus: []
        },
        {
          title: 'Single Item',
          link: '/portfolio-single',
          submenus: []
        }
      ]
    },
    {
      title: 'Blog',
      link: '*',
      submenus: [
        {
          title: 'Home 1',
          link: '/blog-home-1',
          submenus: []
        },
        {
          title: 'Home 2',
          link: '/blog-home-2',
          submenus: []
        },
        {
          title: 'Post',
          link: '/blog-post',
          submenus: []
        }
      ]
    },
    {
      title: 'Other pages',
      link: '*',
      submenus: [
        {
          title: 'Full Width',
          link: '/full-width',
          submenus: []
        },
        {
          title: 'Sidebar',
          link: '/sidebar',
          submenus: []
        },
        {
          title: 'Faq',
          link: '/faq',
          submenus: []
        },
        {
          title: 'Not Found',
          link: '/not-found',
          submenus: []
        },
        {
          title: 'Pricing',
          link: '/pricing',
          submenus: []
        },
        {
          title: 'Admin',
          link: '/admin/dashboard',
          submenus: []
        }
      ]
    }
  ];
  backgroundColor = '#009688';
  items: NavbarMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/admin/dashboard'
    },
    {
      title: 'Perfil',
      link: '/admin/profile'
    },
    {
      title: 'Configuraciones',
      link: '/admin/configurations'
    },
    {
      title: 'Publicaciones',
      link: '/admin/publications'
    },
    {
      title: 'Añadir Post',
      link: '/admin/addpost'
    },
    {
      title: 'Proyectos',
      link: '/admin/projects'
    },
    {
      title: 'Cursos',
      link: '/admin/courses'
    }
  ];

  constructor(private auth: AuthService) {
    this.auth.userVar$.subscribe((data: MeData) => {
      if (data !== null && data !== undefined) {
        this.user = data.user;
        this.showContent = true;
      } else {
        console.log('+++++');
        this.auth.logout();
      }
    });
  }

  ngOnInit() {
    this.auth.start();
  }
}
