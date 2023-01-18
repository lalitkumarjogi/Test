import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StyleDirective } from './style.directive';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {AdminModule} from './admin/admin.module';
import { IdComponent } from './id/id.component'
@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
