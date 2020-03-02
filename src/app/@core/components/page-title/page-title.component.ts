import { Component, OnInit, Input } from '@angular/core';
import { TranslateConfigService } from '@core/services/translate-config.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() title;
  @Input() description;
  constructor(private translate: TranslateConfigService) { }

  ngOnInit() {
    if (this.title === undefined) {
      this.title = 'Home';
    }
    if (this.description === undefined) {
      this.description = '';
    }

    this.translate.getStringByLabel(this.title).subscribe( value => {
      this.title = value;
    });
    this.translate.getStringByLabel(this.description).subscribe( value => {
      this.description = value;
    });
  }

}
