import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageRoutingModule } from './manage-routing.module';
import { ManagepageComponent } from './managepage/managepage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManagepageComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    SharedModule,
  ],
  exports:[
  ]
})
export class ManageModule { }
