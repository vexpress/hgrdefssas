import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageDocConfigRoutingModule } from './manage-doc-config-routing.module';
import { ManageDocConfigComponent } from './manage-doc-config.component';
import { SharedModule } from 'src/app/shared/shared.module'; 
import { AddCheckPointComponent } from './add-check-point/add-check-point.component';
import { CheckListComponent } from './check-list/check-list.component'; 


@NgModule({
  declarations: [ManageDocConfigComponent,  AddCheckPointComponent, CheckListComponent],
  imports: [
    CommonModule,
    ManageDocConfigRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ManageDocConfigModule { }
