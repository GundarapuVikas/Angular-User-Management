import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from '../services/users.service';

import { CreateFormComponent } from './create-form.component';

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;
  let el:HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormComponent ],
      imports:[ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
      ],
      providers:[UsersService]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
      el=fixture.debugElement.nativeElement.querySelector('form')
  })
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('getRand funciton should defined',()=>{
    expect(component.getRand).toBeDefined();
  })

  it('should call the createUserDetails on submit and adds user',waitForAsync(
    inject([UsersService],(_userService:UsersService)=>{
      const formData={
        user_firstName:"John",
        user_lastName:"Doe",
        user_login:"john.doe",
        user_password:"John123",
        user_age:"42"
      }
      component.createForm.setValue(formData);
      const dummyUsers=[
        {
          "id": "1681907991037779606",
          "age": 32,
          "firstName": "Goutham",
          "lastName": "Sai",
          "isDeleted": false,
          "login": "sai.goutham",
          "password": "sai098",
          "lastUpdated": new Date("2023-04-19T12:39:21.550Z")
        },
        {
          "id": "1681915356951473927",
          "age": 21,
          "firstName": "sudharshan",
          "lastName": "Thanmmaigari",
          "isDeleted": true,
          "login": "sudharshan.t",
          "password": "sudahrshan124",
          "lastUpdated": new Date("2023-04-19T14:42:13.581Z")
        }
      ]
      var newUser={
        id:component.getRand(),
        age:component.createForm.value.user_age,
        firstName:component.createForm.value.user_firstName,
        lastName:component.createForm.value.user_lastName,
        isDeleted:false,
        login:component.createForm.value.user_login,
        password:component.createForm.value.user_password,
        lastUpdated:new Date()
      }
      spyOn(_userService,'addUser').and.returnValue(of(newUser))
      spyOn(component,'createdUserDetails');
      component.createdUserDetails();
      fixture.detectChanges();
      _userService.getUsers().subscribe(data=>{
        expect(data.length).toEqual(dummyUsers.length+1);
      })
    })
  ))
});
