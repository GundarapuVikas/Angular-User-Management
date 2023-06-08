import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit{
  constructor(private _userService:UsersService) {

  }
  ngOnInit(): void {
  }
   
  createForm=new FormGroup({
    user_firstName:new FormControl(),
    user_lastName:new FormControl(),
    user_login:new FormControl(),
    user_password:new FormControl(),
    user_age:new FormControl()
  })
  getRand(){
    return new Date().getTime().toString() + Math.floor(Math.random()*1000000);
  }
  
  createdUserDetails(){
    let now=new Date();
    var newUser={
      id:this.getRand(),
      age:this.createForm.value.user_age,
      firstName:this.createForm.value.user_firstName,
      lastName:this.createForm.value.user_lastName,
      isDeleted:false,
      login:this.createForm.value.user_login,
      password:this.createForm.value.user_password,
      lastUpdated:now
    }
    this._userService.addUser(newUser).subscribe(data=>{
      location.reload();
    })
    this.createForm.reset();
  }
}
