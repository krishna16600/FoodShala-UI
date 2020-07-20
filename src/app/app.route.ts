import { LoginGuard } from './login.guard';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditFoodItemComponent } from './edit-food-item/edit-food-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const MAIN_ROUTES: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'home' , component: HomeComponent},
    {path:'register-restaurant', component: RegisterRestaurantComponent, canActivate: [LoginGuard]},
    {path:'register-customer', component: RegisterUserComponent, canActivate: [LoginGuard]},
    {path:'login' , component:LoginComponent, canActivate: [LoginGuard]},
    {path:'logout', component: LogoutComponent},
    {path: 'restaurant-menu', component: RestaurantMenuComponent, canActivate: [RoleGuard]},
    {path: 'add-food-item', component: AddItemComponent, canActivate: [RoleGuard]},
    {path: 'edit-food-item/:id', component: EditFoodItemComponent, canActivate: [RoleGuard]},
    {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    {path: 'view-order', component: ViewOrderComponent, canActivate: [RoleGuard]},
    {path: '**', component: PageNotFoundComponent}
];