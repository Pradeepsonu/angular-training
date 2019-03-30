import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { NameComponent } from './name/name.component';
import { ProductviewComponent } from './productview/productview.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserviewComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'logistics',
    component: LogisticsComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent
  },
  {
    path: 'name',
    component: NameComponent
  },
  {
    path: 'products/add',
    component: ProductviewComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
