import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from '../users-list/users-list.component';
import { UsersListModule } from '../users-list/users-list.module';
 import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { SingleUserComponent } from '../single-user/single-user.component';

@NgModule({
  declarations: [
    SingleUserComponent,

  UsersComponent],
  imports: [
    UsersListModule,
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
