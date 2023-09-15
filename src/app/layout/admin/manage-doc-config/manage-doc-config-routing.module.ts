import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCheckPointComponent } from './add-check-point/add-check-point.component'; 
import { CheckListComponent } from './check-list/check-list.component';
import { ManageDocConfigComponent } from './manage-doc-config.component'; 

const routes: Routes = [
  {
    path: '',
    component: ManageDocConfigComponent
  }, 
  {
    path: 'add-check',
    component: AddCheckPointComponent
  },
  {
    path: 'check-list',
    component: CheckListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageDocConfigRoutingModule { }
