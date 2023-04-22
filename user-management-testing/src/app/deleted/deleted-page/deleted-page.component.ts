import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/app/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-deleted-page',
  templateUrl: './deleted-page.component.html',
  styleUrls: ['./deleted-page.component.css']
})
export class DeletedPageComponent implements OnInit{
  public users:UserType[]=[];
  public btnText:string="Activate";
  public filterType:string="deletedType";
  constructor(private _userService:UsersService) {
    
  }
  ngOnInit(): void { 
    this.getUserMethod();
  }

  public getUserMethod():void{
    this._userService.getUsers().subscribe((data)=>{
      this.users=data.filter((user)=>{return user.isDeleted})
    })

  }

  public activate=(user:UserType):void=>{
    let activatedUser=user;
    activatedUser.isDeleted=false;
    this._userService.updateUser(activatedUser,user.id).subscribe()
    this.getUserMethod();
  }

}

 