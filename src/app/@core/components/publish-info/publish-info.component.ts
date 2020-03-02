import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publish-info',
  templateUrl: './publish-info.component.html',
  styleUrls: ['./publish-info.component.css']
})
export class PublishInfoComponent implements OnInit {
  @Input() important: boolean;
  constructor() { }

  ngOnInit() {
  }

}
