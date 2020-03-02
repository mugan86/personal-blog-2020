import { Component, Input } from '@angular/core';
import { CarouselItem } from './carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() items: CarouselItem[];
  constructor() { }
  open(i: number) {
    window.open(this.items[i].url);
  }
}
