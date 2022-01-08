import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users!: any;

  user: any;

  id!: number;
  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.users = this.userService.getUser();

    this.user = this.users[this.id-1];
  }
  onClick(){

    this.location.back();

  }
}
