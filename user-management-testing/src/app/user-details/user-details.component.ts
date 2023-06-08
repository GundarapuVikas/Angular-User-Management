import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserType } from '../user';
import { UsersService } from '../services/users.service';
  
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  public selectedUser!:UserType;
  public id!:string;
  constructor(private route:ActivatedRoute,private _userService:UsersService) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id=params.get('userId')|| "0";
      this.setSelectedUser(this.id);
    })
  }
  setSelectedUser(id:string){
    this._userService.getUserById(id).subscribe((data)=>{
      this.selectedUser=data;
    })
  }
}
