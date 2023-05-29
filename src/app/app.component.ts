import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WelcomeComponent} from "./welcome/welcome.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  constructor(private http: HttpClient) {
    this.http = http;
  }
}

