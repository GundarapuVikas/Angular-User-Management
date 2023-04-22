import { Component, Input, OnInit } from '@angular/core';
import { UserType } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public userData: any;
  @Input() public btnText:string="details";
  @Input()
  public callback!:(user:UserType) => void;
  @Input()
  public editDetails!:(user:UserType) => void;
  constructor() {
  }
  ngOnInit(){ 
  }
}
 