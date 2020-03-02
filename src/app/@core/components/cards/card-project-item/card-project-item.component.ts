import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-project-item',
  templateUrl: './card-project-item.component.html',
  styleUrls: ['./card-project-item.component.css']
})
export class CardProjectItemComponent implements OnInit {
  @Input() image = 'http://placehold.it/750x450';
  @Input() title = 'title';
  @Input() description = 'one description';
  @Input() startData = '2019-10-25';
  @Input() finishData = '?';
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
