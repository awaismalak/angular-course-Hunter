import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from '../users-list/users-list.component';
import { SingleUserComponent } from '../single-user/single-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {path:'', component:UsersComponent},
  {path:':username', component:SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
