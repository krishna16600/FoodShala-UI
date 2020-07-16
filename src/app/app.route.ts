import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';

export const MAIN_ROUTES: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'home' , component: HomeComponent},
    {path:'register-restaurant', component: RegisterRestaurantComponent},
    {path:'register-customer', component: RegisterUserComponent}
];