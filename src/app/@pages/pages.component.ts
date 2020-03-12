import { Component, OnInit } from '@angular/core';
import { NavbarMenuItem } from '@core/components/shared/navbar/navbar.interface';
import { AuthService } from '@core/services/auth.service';
import { MeData } from '@core/interfaces/me-data.interface';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css' ]
})
export class PagesComponent implements OnInit {
  user;
  mainItem: NavbarMenuItem = {
    title: 'Anartz Mugika Ledo',
    link: '/home',
    submenus: []
  };
  menuItems: NavbarMenuItem[] = [
    {
      title: 'menus.home',
      link: '/home',
      active: true,
      submenus: []
    },
    {
      title: 'menus.about',
      link: '/about',
      active: true
    },
    {
      title: 'menus.courses',
      link: '/courses',
      active: true
    },
    {
      title: 'menus.portfolio',
      link: '/portfolio',
      active: true,
    },
    {
      title: 'Services',
      link: '/services',
      active: false
    },
    {
      title: 'menus.contact',
      link: '/contact',
      submenus: [],
      active: false
    },
    {
      title: 'Faq',
      link: '/faq',
      active: false,
      submenus: []
    }
    /*{
      title: 'menus.portfolio',
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
          active: true,
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
        }
      ]
    }*/
  ];
  backgroundColor = '#009688';
  constructor(private auth: AuthService) {
    this.auth.userVar$.subscribe((data: MeData) => {
      if (data !== null && data !== undefined) {
        this.user = data.user;
      } else {
        this.user = null;
      }
    });
  }

  ngOnInit() {
    this.auth.start();
  }
}
