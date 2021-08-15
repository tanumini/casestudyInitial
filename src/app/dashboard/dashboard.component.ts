import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { Role } from '../_models/Role';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  user: User = new User;

  constructor(private authenticationService: AuthenticationService) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get isAdmin() {
      return this.user && this.user.role === Role.Admin;
  }

  logout() {
      this.authenticationService.logout();
  }
}
