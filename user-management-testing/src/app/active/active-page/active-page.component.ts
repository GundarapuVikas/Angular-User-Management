import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/user';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-active-page',
  templateUrl: './active-page.component.html',
  styleUrls: ['./active-page.component.css'] 
})
export class ActivePageComponent implements OnInit{
  public users:UserType[]=[];
  public btnText:string="Deactivate";
  public filterType:string="activeType";
  constructor(private _userService:UsersService) {
    
  }
  ngOnInit(): void { 
    this.getUserMethod();
  }

  public getUserMethod():void{
    this._userService.getUsers().subscribe((data)=>{
      this.users=data
    })
  }

  public deactivate=(user:UserType):void=>{
    console.log("entered deactivate function")
    let deactivatedUser=user;
    deactivatedUser.isDeleted=true;
    this._userService.updateUser(deactivatedUser,user.id).subscribe()
    this.getUserMethod();
  }
} 
 