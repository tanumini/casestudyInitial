import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
// import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  
  {path:'',component:DashboardComponent},
  {path:'login-employee',component:EmployeeloginComponent},
  { path: 'home/add', component: CreateComponent },
 // {
   // path: '',
   // component: AppComponent,
   // canActivate: [AuthGuard]
//}
{path:'home-employee',component:EmployeedashboardComponent},
{path:'employee-dashboard',component:EmployeedashboardComponent,
canActivate:[AuthGuard]},
{path:'customer-dashboard',component:HomeComponent,
canActivate:[AuthGuard]},
{
    path: 'login',
    component: LoginComponent,
  
},
{
  path:'home',component:HomeComponent
},
{path:'employee-login',
component:EmployeeloginComponent},
{ path: 'register', component: RegisterComponent },
{path:'dashboard',component:DashboardComponent},
// otherwise redirect to home
// { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
