import { Component, OnInit } from '@angular/core';
import { CurrentRouterService } from '@core/services/current-router.service';
import { Router } from '@angular/router';
import { Post } from '@core/interfaces/api.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  post: Post;
  constructor(private router: Router, private currentRouter: CurrentRouterService) {
    this.currentRouter.updateCurrentUrl(this.router.url);
  }

  add() {
    console.log(this.post);
  }

}
