import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ComponentsModule
  ]
})
export class UserModule { }
