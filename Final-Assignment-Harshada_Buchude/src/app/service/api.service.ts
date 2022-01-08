import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
rootUrl="https://reqres.in/api/register"

  constructor(private http:HttpClient) { 
    
  }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getUserManager(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/users")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  public baseurl=environment.loginUrl
   login(url:any,body:any){
     return this.http.post<any>(this.baseurl+url,body)
   }
   adduser(data: any){
     return this.http.post(this.rootUrl+"users",data)
   }
   getSingleProduct(){

    let url="https://fakestoreapi.com/products/1"

    return this.http.get(url);

  }
  
}

