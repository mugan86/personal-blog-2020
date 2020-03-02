import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from '@core/services/translate-config.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() title;
  @Input() path;
  @Input() page;
  constructor(private translate: TranslateConfigService) { }

  ngOnInit() {
    console.log(this.page, this.title);
    if (this.title === undefined) {
      this.title = 'Home';
    }
    if (this.path === undefined) {
      this.path = 'home';
    }
    if (this.page === undefined) {
      this.page = '';
    }
    this.translate.getStringByLabel(this.page).subscribe(value => {
      this.page = value;
      console.log(value);
    });
    this.translate.getStringByLabel(this.title).subscribe( value => {
      this.title = value;
    });
  }

}
