import { Component, Input, OnInit } from '@angular/core';
import { UserType } from '../user';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit{
  public selectedUser!:UserType;
  public id!:string;
  constructor(private route:ActivatedRoute,private _userService:UsersService){
    
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
  updateForm=new FormGroup({
    user_password:new FormControl(),
    user_age:new FormControl()
  })

  editedUserDetails(){
    console.warn(this.updateForm.value);
    this.selectedUser.password=this.updateForm.value.user_password;
    this.selectedUser.age=this.updateForm.value.user_age;
    this._userService.updateUser(this.selectedUser,this.selectedUser.id).subscribe((data)=>{
      console.log("updated user: ",data);
      alert('user updated successfully');
    })
    this.updateForm.reset();
  }
}
