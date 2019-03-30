import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { StatscardComponent } from './statscard/statscard.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsertableComponent } from './usertable/usertable.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { UserviewComponent } from './userview/userview.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { NameComponent } from './name/name.component';
import { ProductviewComponent } from './productview/productview.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductServiceService } from './product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    LoginComponent,
    SuccessComponent,
    StatscardComponent,
    HeaderComponent,
    DashboardComponent,
    UsertableComponent,
    AnalyticsComponent,
    UsersComponent,
    ProductsComponent,
    LogisticsComponent,
    UserviewComponent,
    ProductdetailsComponent,
    ReactiveComponent,
    NameComponent,
    ProductviewComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductServiceService, UserServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
