import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from '../services/users.service';

import { UpdateFormComponent } from './update-form.component';

describe('UpdateFormComponent', () => {
  let component: UpdateFormComponent;
  let fixture: ComponentFixture<UpdateFormComponent>;
  let el:HTMLElement
  let dummyUser={
    "id": "123",
    "firstName": "karthik",
    "lastName": "Kumar",
    "age": 21,
    "login": "kumar.Karthik",
    "password": "gopi1234",
    "isDeleted": true,
    "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormComponent ],
      imports:[
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
      ],
      providers:[UsersService]
    })
    .compileComponents().then(()=>{
        fixture = TestBed.createComponent(UpdateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el=fixture.debugElement.nativeElement.querySelector('form')
    })
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the selected user based on id',waitForAsync(
    inject([UsersService],(_userService:UsersService)=>{
        const dummyUser={
            "id": "123",
            "firstName": "karthik",
            "lastName": "Kumar",
            "age": 21,
            "login": "kumar.Karthik",
            "password": "gopi1234",
            "isDeleted": true,
            "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
          }
        spyOn(_userService,'getUserById').and.returnValue(of(dummyUser));
        component.setSelectedUser("123");
        fixture.detectChanges();
        expect(component.selectedUser).toEqual(dummyUser);
    })
  ))

    it('should call editUserdetails method on button click',waitForAsync(
      inject([UsersService],(_userService:UsersService)=>{
        const formData={
          user_password:"karthik555",
          user_age:24
        }
        component.selectedUser=dummyUser;
        component.updateForm.setValue(formData)
        let updatedDummy=dummyUser;
        updatedDummy.password=formData.user_password;
        updatedDummy.age=formData.user_age;
        spyOn(_userService,'updateUser').and.returnValue(of(updatedDummy))
        spyOn(component,'editedUserDetails');
        component.editedUserDetails();
        fixture.detectChanges();
        expect(component.selectedUser.password).toEqual(formData.user_password);
        expect(component.selectedUser.age).toEqual(formData.user_age);
      })
    ))
});
