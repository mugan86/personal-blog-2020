import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() image: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
