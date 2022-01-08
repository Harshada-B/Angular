import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl:string='https://jsonplaceholder.typicode.com/users'
result:any
  constructor(private http:HttpClient) { 
     this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
       (response) => {this.result = response; console.log(response)},
       (error) => {console.log(error)}
     );
  }

   addUser(user:any){
     this.result.push(user);
   }
   getUser(){
     return this.result;
   }
}
