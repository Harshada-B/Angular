import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { UsermanagerComponent } from './components/usermanager/usermanager.component';
import { ProductComponent } from './components/product/product.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './components/usermanager/users/users.component';
import { Routes } from '@angular/router';
const appRoutes:Routes=[{
  path:"DashBoard",component:DashboardComponent
},];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    UsermanagerComponent,
    ProductComponent,  
    AdduserComponent,
    UserdetailsComponent,
    ProductdetailsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
