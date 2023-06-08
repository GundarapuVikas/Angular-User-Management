import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed,inject, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from '../services/users.service';
import { SharedModule } from '../shared/shared.module';
import { UserType } from '../user';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let el:HTMLElement;
  let dummySelectedUser:UserType={
    "id": "1",
    "age": 66,
    "firstName": "Bradford",
    "lastName": "Ledner",
    "isDeleted": false,
    "login": "bradford.ledner",
    "password": "Brad3333",
    "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent],
      imports:[
        SharedModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    component.selectedUser=dummySelectedUser;
    component.id="1";
    el=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create component',()=>{
    expect(component).toBeTruthy();
  })

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

  it('should have a selected user and user-detail container is to be defined',()=>{
    expect(fixture.debugElement.query(By.css('.user-detail'))).toBeTruthy();
  })

  it('should check class binding based on isdeleted',()=>{
    expect(fixture.debugElement.query(By.css('.text-success'))).toBeTruthy();
    expect(el.querySelector('.card-text')?.innerHTML.trim()).toEqual("Active")
    component.selectedUser.isDeleted=true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.text-danger'))).toBeTruthy();
    expect(el.querySelector('.card-text')?.innerHTML.trim()).toEqual("Deleted")
  })

  it('checks all databindings in view with selected user',()=>{
    expect(el.querySelector('.s-login')?.innerHTML.trim()).toEqual("bradford.ledner")
    expect(el.querySelector('.s-fname')?.innerHTML.trim()).toEqual("Bradford")
    expect(el.querySelector('.s-lname')?.innerHTML.trim()).toEqual("Ledner")
    expect(el.querySelector('.s-age')?.innerHTML.trim()).toEqual("66")
    expect(el.querySelector('.s-date')?.innerHTML.trim()).toEqual("19 April, 2023")
  })
});
