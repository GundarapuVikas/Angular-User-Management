import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserType } from 'src/app/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-managepage',
  templateUrl: './managepage.component.html',
  styleUrls: ['./managepage.component.css']
})
export class ManagepageComponent implements OnInit{
  public users:UserType[]=[];
  public btnText:string="Details";
  constructor(private router:Router,private route:ActivatedRoute,private _userService:UsersService) {
    
  }
  ngOnInit(): void { 
    this.getUserMethod();
  }
 
  public getUserMethod():void{
    this._userService.getUsers().subscribe((data)=>{
      this.users=data;
    });
  }

  public showDetails=(user:UserType):void=>{
    this.router.navigate(['show-details',user.id],{relativeTo:this.route})
  }

  public editDetails=(user:UserType):void=>{
    this.router.navigate(['edit-details',user.id],{relativeTo:this.route})
  }

  public createUser(){
    this.router.navigate(['create-user'],{relativeTo:this.route})
  }
}