import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product:any=[]
  constructor(private singleproduct: ApiService) {
    this.singleproduct.getSingleProduct().subscribe(data=>{
      console.warn(data)
      this.product=data
    })
   }
  ngOnInit(): void {
  }
}
