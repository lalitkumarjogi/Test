import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from './admin/admin.module'
import { IdComponent } from './id/id.component';
const routes: Routes = [
  {
    path:'id',
    component:IdComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
