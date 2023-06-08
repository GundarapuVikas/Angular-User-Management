import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from '../create-form/create-form.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { ManagepageComponent } from './managepage/managepage.component';

const routes: Routes = [
  {path:'',component:ManagepageComponent},
  {
    path:'',
    component:ManagepageComponent,
    children:[
      {
        path:'show-details/:userId',
        component:UserDetailsComponent,
      },
      {
        path:'create-user',
        component:CreateFormComponent,
      },
      {
        path:'edit-details/:userId',
        component:UpdateFormComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
 