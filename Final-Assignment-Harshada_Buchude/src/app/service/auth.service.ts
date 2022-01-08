import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private route : Router) { }
  loggedIn=false;
  getStatus(){
    return this.loggedIn
  }
  setStatus(status:boolean){
    this.loggedIn=status;
  }
}
// export class AuthorizeService {
//   loggedIn=false;
//   constructor(private route : Router) { }
// getStatus(){
//   return this.loggedIn;
// }
// setStatus(status:boolean){
//   this.loggedIn= status;
// }
// }