import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ForgetComponent } from './forget/forget.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ListComponent,
    ForgetComponent,
    LoginComponent,
    
  ],
  exports:[
ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AdminModule { }
