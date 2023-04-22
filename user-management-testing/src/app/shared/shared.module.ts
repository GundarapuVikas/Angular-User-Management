import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserComponent } from '../user/user.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { CreateFormComponent } from '../create-form/create-form.component';
import {ReactiveFormsModule} from '@angular/forms'
import { ActiveFilterPipe } from './pipes/active-pipe/activeFilter.pipe';
import { DeletedFilterPipe } from './pipes/delete-pipe/deletedFilter.pipe';
import { FullNamePipe } from './pipes/fullName-pipe/fullName.pipe';
import { DateFormatPipe } from './pipes/date-pipe/date.pipe';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserComponent,
    UsersListComponent,
    UpdateFormComponent,
    CreateFormComponent,
    ActiveFilterPipe,
    DeletedFilterPipe,
    FullNamePipe,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    UserDetailsComponent,
    UserComponent,
    UsersListComponent,
    UpdateFormComponent,
    CreateFormComponent
  ]
})
export class SharedModule { }
