import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guard/auth.guard';
import { loginGuard } from './core/guard/login.guard';
import { FastFoodComponent } from './components/fast-food/fast-food.component';

import { CategoriesComponent } from './components/categories/categories.component';
import { OffersComponent } from './components/offers/offers.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { PersonComponent } from './components/person/person.component';
const routes: Routes = [
  { 
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'Categories',
    component:CategoriesComponent,

  },
  {
path: 'delivery',
component: DeliveryComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
    canActivate: [authGuard]

  },
 
  {
path: 'offers',
component: OffersComponent,
canActivate: [authGuard]
  },
  {
path: 'fastFood',
component: FastFoodComponent,
canActivate: [authGuard]
  },

{
  path: 'Dashboard',
  component: DashboardComponent,
  canActivate: [authGuard]
},
{
  path: 'login',
  component: LoginComponent,
  canActivate: [loginGuard]
},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
