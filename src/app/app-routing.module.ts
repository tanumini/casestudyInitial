import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'add', component: CreateComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},

{
    path: 'login',
    component: LoginComponent
},
{ path: 'register', component: RegisterComponent },

// otherwise redirect to home
{ path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
