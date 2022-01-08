import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-yms';
 
  submitted=false;
  defaultStatus:any="active";
  @ViewChild("f")
  formValues!: NgForm; 

  loggedIn!:boolean

   constructor(private auth:AuthService,public route:Router){

       this.loggedIn=auth.getStatus()

   }
}
