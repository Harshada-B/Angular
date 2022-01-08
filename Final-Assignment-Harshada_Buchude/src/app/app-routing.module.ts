import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { UsermanagerComponent } from './components/usermanager/usermanager.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { UsersComponent } from './components/usermanager/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
{
  path:'adduser',
  component:AdduserComponent,canActivate:[AuthGuard]
},
{path: 'DashBoard',
component:DashboardComponent,canActivate:[AuthGuard]
},
{path: 'listuser',
component:UsermanagerComponent,canActivate:[AuthGuard]
},
{path: 'product',
component:ProductComponent,canActivate:[AuthGuard]
},
{path: 'productdetails',
component:ProductdetailsComponent,canActivate:[AuthGuard]
},
{path: 'useradded/:id',
component:UsersComponent,canActivate:[AuthGuard]
},
{path: 'item/:id',
component:UserdetailsComponent,canActivate:[AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
