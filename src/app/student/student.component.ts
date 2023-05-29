import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {parseJson} from "@angular/cli/src/utilities/json-file";
import {FacultyComponent} from "../faculty/faculty.component";


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  title = "Student";
  totalStudent: any
  studentById: any
  id?:number
  name?:string
  facultyId?:string


  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllStudent = () => {
    this.http.get("http://localhost:8080/api/student").subscribe({
        next: data => {
          this.totalStudent = data
          console.log(data)
        },
        error: err => {
          console.error("not found student")
        }
      }
    )
  }


  findById = () => {
    this.http.get("http://localhost:8080/api/student/" + this.id).subscribe({
        next: data => {
          this.studentById = data
          console.log(data)
        },
        error: err => {
          console.error("not found student")
        }
      }
    )
    return "not found";
  }
  saveStudent():void{
    this.http.post("http://localhost:8080/api/student", {id:this.id, name:this.name,faculty:{id:this.facultyId}}).subscribe({
        next: data => {
          console.log(data)
        },
        error: err => {
          console.error(err.messages)
        }
      }
    )
  }
  deleteById = () => {
    this.http.delete("http://localhost:8080/api/student/" + this.id).subscribe({
        next: data => {
          console.log("delete success")
        },
        error: err => {
          console.error(err.messages)
        }
      }
    )
  }
  updateStudent(){
    this.http.post("http://localhost:8080/api/student/",{}).subscribe({
      next:data =>{

      },
      error:err => {
        console.error(err.messages)
      }
    })
  }

}

