import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // formGroup!: FormGroup
  constructor(private apiservices: ApiService,private http:HttpClient, private router: Router,private auth:AuthService) { }
  ngOnInit(): void {
    // this.initForm()
  }
  // initForm() {
  //   this.formGroup = new FormGroup({
  //     email: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   });
  // Login() {
  //   if (this.formGroup.valid) {
  //     this.auth.setStatus(true)
  //     const body = this.formGroup.value
  //     this.apiservices.login('/login', body)
  //       .subscribe((responce) => {
  //         if (responce) {
  //           sessionStorage.setItem('token', responce.token)
  //           this.router.navigate(['/DashBoard'])
  //           console.log(responce)
  //         }
  //         else {
  //         alert('false')
  //         }
  //       })
  //   }
  // }
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 option = {
   headers: this.httpHeaders
 }
 Login(data: any){
  console.log(data)
  this.http.post<any>('https://reqres.in/api/login',data,this.option).toPromise().then((res: any)=>{
    console.log(res);
    sessionStorage.setItem("token",res.token);
    this.auth.setStatus(true);
    this.router.navigate(['/DashBoard']);
  },
  (error) =>{
    console.log(error)
    alert('Entered Username and Password is wrong!')
  })

}
}
