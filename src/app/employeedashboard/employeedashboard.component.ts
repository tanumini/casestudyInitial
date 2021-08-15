import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';

import { AuthenticationService, UserService } from '../_services';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

 
  loading = false;
  user: User;
  userFromApi !: User;

  constructor(
      private userService: UserService,
      private authenticationService: AuthenticationService
  ) {
      this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
      this.loading = true;
      this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
          this.loading = false;
          this.userFromApi = user;
      });
  }
  logout() {
    this.authenticationService.logout();
  }
}
