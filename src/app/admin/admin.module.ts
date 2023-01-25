import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { ForgetComponent } from './forget/forget.component';
import { GetComponent } from './get/get.component';

@NgModule({
  declarations: [
    ListComponent,
    ForgetComponent,
    GetComponent,
   
    
  ],
  exports:[
ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
       
  ]
})
export class AdminModule { }
