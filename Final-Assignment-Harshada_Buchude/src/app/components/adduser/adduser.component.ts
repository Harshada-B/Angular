import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
// alert:boolean=false
// register=new FormGroup({
//   username:new FormControl(''),
//   password:new FormControl('')

// })
//   constructor(private user:ApiService  ) {}

//   ngOnInit(): void {
//   }
//   collection()
//   {
//     console.warn(this.register.value)
//     this.user.adduser(this.register.value).subscribe((result)=>{
//     console.warn("result",result )
//     alert("user successfully added with id:4")
//     })
//   }
register!:FormGroup
user:any
constructor(private userService:UserService,private route:Router){
  this.register = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
  })
}
ngOnInit(): void { 
}
collection(){
  console.log("Hello");
    console.log(this.register.get('username')?.value);
    console.log();
    this.user = {
      id: this.userService.result.length+2,
      name: this.register.get('username')?.value,
      username: this.register.get('username')?.value,
      password: this.register.get('password')?.value,
      email: this.register.get('email')?.value,
      address: {
        city: this.register.get('city')?.value,
      zipcode: this.register.get('zipcode')?.value,
      }
    }
    this.userService.addUser(this.user);
    this.route.navigate(['/useradded',this.user.id]);
}
}
