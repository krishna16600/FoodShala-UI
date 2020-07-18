import { AddItemComponent } from './add-item/add-item.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

export const MAIN_ROUTES: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'home' , component: HomeComponent},
    {path:'register-restaurant', component: RegisterRestaurantComponent},
    {path:'register-customer', component: RegisterUserComponent},
    {path:'login' , component:LoginComponent},
    {path:'logout', component: LogoutComponent},
    {path: 'restaurant-menu', component: RestaurantMenuComponent},
    {path: 'add-food-item', component: AddItemComponent}
];