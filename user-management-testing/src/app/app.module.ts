import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ActiveModule,
    DeletedModule,
    HttpClientModule
  ],
  exports:[
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
