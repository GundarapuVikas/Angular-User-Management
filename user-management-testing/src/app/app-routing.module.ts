import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActivePageComponent } from './active/active-page/active-page.component';
import { DeletedPageComponent } from './deleted/deleted-page/deleted-page.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component:HomePageComponent},
  {path:"active",component:ActivePageComponent},
  {path:"deleted",component:DeletedPageComponent},
  {
    path:"manage",
    loadChildren:()=>import('./manage/manage.module').then(module=>module.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
