import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from './admin/admin.module'
import { ForgetComponent } from './admin/forget/forget.component';
import { ListComponent } from './admin/list/list.component';

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'forget',component:ForgetComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
