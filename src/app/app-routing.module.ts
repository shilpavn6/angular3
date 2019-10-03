import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from 'src/app/Components/home/home.component';
import {LoginComponent} from 'src/app/Components/login/login.component';
import {RegisterComponent} from 'src/app/Components/register/register.component';
import { DialogComponent } from './Components/dialog/dialog.component';
const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
// {path:'dialog',component:DialogComponent}
    // otherwise redirect to home
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
