import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentComponent} from "./student/student.component";
import {FacultyComponent} from "./faculty/faculty.component";

const routes: Routes = [
  //[{ path: 'user/:name', component: UserCmp }]
  {path:"api/student",component:StudentComponent},
  {path:"faculty",component:FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
