import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor ,fakeBackendProvider, fakeBackendProvider1, JwtInterceptor} from './_helpers';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';
// import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateComponent,
    // CustomerdashboardComponent,
    EmployeedashboardComponent,
    EmployeeloginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   
    {
      provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider,fakeBackendProvider1
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
