import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlistpageComponent } from './qlistpage/qlistpage.component';
import { AddeditQouteComponent } from './addedit-qoute/addedit-qoute.component';

const routes: Routes = [
  {component:QlistpageComponent,path:""},
  {component:AddeditQouteComponent,path:"createqoute"},
  {component:AddeditQouteComponent,path:"editqoute/:qouteno"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
