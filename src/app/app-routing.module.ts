import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
path:'', component:HomeComponent,pathMatch:'full' },
{path:'contact', component:ContactComponent},
{path:'users', loadChildren:'./users/users/users.module#UsersModule'}


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
