import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  totalFaculty: any
  id?:number

  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllFaculty = () => {
    this.http.get("http://localhost:8080/api/faculty").subscribe({
        next: data => {
          this.totalFaculty = data
          console.log(data)
        },
        error: err => {
          console.error("not found student")
        }
      }
    )
  }
}
