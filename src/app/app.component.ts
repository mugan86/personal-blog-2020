import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mugan86-blog-template';
  constructor(private auth: AuthService) {}
  ngOnInit() {
    this.auth.accessVar$.subscribe((data: boolean) => {
      console.log('login?: ', data);
      if (data === false) {
        localStorage.removeItem('tokenJWT');
      }
    });
  }
}
