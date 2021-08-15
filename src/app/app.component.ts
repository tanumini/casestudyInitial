import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models';
import { Role } from './_models/Role';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor() { }

    ngOnInit(): void {
    }
   
    user: User = new User;

    
}
