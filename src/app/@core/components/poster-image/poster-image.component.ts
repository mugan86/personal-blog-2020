import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-image',
  templateUrl: './poster-image.component.html',
  styleUrls: ['./poster-image.component.css']
})
export class PosterImageComponent implements OnInit {
  @Input() classValues: string;
  @Input() src: string;
  @Input() alt: string;
  constructor() { }

  ngOnInit() {
  }

}
