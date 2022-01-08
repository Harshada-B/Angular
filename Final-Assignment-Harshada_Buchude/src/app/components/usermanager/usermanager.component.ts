import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {
  public employeedata = [];
  p: number = 1;
  count: number = 6;

  users: any[] = [];
  public userManager:any;

  constructor(private api:ApiService,private userService:UserService) { }
  ngOnInit(): void {

    this.api.getUserManager()

    .subscribe(res=>{

      this. userManager=res;

    })

    this.users = this.userService.getUser();

    console.log(this.userService.getUser())
  }

}
