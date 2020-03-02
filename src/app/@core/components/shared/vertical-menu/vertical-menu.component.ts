import { Component, OnInit, Input } from '@angular/core';
import { NavbarMenuItem } from '../navbar/navbar.interface';
import { CurrentRouterService } from '@core/services/current-router.service';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent {
  @Input() items: NavbarMenuItem[];
  @Input() backgroundColor: string;
  nothing = '';
  currenRoute: string;
  constructor(private currentRouter: CurrentRouterService) {
    this.currentRouter.currentUrl$.subscribe((url: string) => {
      this.currenRoute = url;
    });
  }
}
