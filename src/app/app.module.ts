import { LoginGuard } from './login.guard';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditFoodItemComponent } from './edit-food-item/edit-food-item.component';
import { CartComponent } from './cart/cart.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterUserComponent,
    RegisterRestaurantComponent,
    LogoutComponent,
    RestaurantMenuComponent,
    AddItemComponent,
    EditFoodItemComponent,
    CartComponent,
    ViewOrderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard, RoleGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
