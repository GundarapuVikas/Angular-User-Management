import { Component, Input, OnInit } from '@angular/core';
import { UserType } from '../user';
 
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  @Input()
  public users: UserType[]=[];
  @Input() public btnText:string="details";
  @Input() public filterType:string="";
  @Input()
  public callback!:(user:UserType) => void;
  @Input() 
  public editDetails!:(user:UserType)=>void;
  constructor() { 
  }
  ngOnInit(): void {
 
  }
}
