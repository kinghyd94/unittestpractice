import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtoragentComponent } from './debtoragent/debtoragent.component';
import { MessagedetailsComponent } from './messagedetails/messagedetails.component';

const routes: Routes = [{
  
  path:'messagedetails',component:MessagedetailsComponent
  
},{
  path:'',redirectTo:'/messagedetails',pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
