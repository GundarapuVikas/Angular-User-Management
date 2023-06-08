import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedPageComponent } from './deleted-page/deleted-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DeletedPageComponent 
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeletedModule { }
