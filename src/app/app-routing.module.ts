import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './components/product-list/vehicle/vehicle.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: 'vehicles', component: ProductListComponent,
    children: [
       { 
         path: 'ProductItemComponent', 
         component: ProductItemComponent,
        }, 
     ] 
  },
  { path: 'vehicle/:id', component: VehicleComponent },
  {
    path: '', component: ProductListComponent
  },
  {path:'',redirectTo:'/shop' ,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shop',component:ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
