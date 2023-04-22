import { COMPILER_OPTIONS } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FullNamePipe } from '../shared/pipes/fullName-pipe/fullName.pipe';
import { SharedModule } from '../shared/shared.module';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let dummyUser={
    "id": "",
    "age": 0,
    "firstName": "",
    "lastName": "",
    "isDeleted": false,
    "login": "",
    "password": "",
    "lastUpdated": ""
  }
  let el:HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent,FullNamePipe ],
      imports:[SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.userData=dummyUser;
    el=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create component',()=>{
    expect(component).toBeTruthy();
  })
  it('should have a dummy user input', () => {
    dummyUser={
        "id": "15",
        "age": 40,
        "firstName": "Will",
        "lastName": "Willms",
        "isDeleted": false,
        "login": "will.willms",
        "password": "QXWF2P8Yko",
        "lastUpdated": "2023-04-19T04:08:18.799Z"
      }
      component.userData=dummyUser;
      fixture.detectChanges();
    expect(component.userData).toEqual(dummyUser);
  });

  it('should have the full name',()=>{
    dummyUser={
        "id": "15",
        "age": 40,
        "firstName": "Will",
        "lastName": "Willms",
        "isDeleted": false,
        "login": "will.willms",
        "password": "QXWF2P8Yko",
        "lastUpdated": "2023-04-19T04:08:18.799Z"
      }
      component.userData=dummyUser;
      fixture.detectChanges();
    const element=el.querySelector('.user-name');
    expect(element?.innerHTML.trim()).toEqual((dummyUser.firstName+" "+dummyUser.lastName));
  })

  it('should have red border if deleted or green border if not',()=>{
    expect(el.querySelector('.border-success')).toBeTruthy();
    component.userData.isDeleted=true;
    fixture.detectChanges();
    expect(el.querySelector('.border-danger')).toBeTruthy();
  })

  it('should have btnText based on the inputs and adds btntext in button tag ',()=>{
    expect(component.btnText).toEqual('details');
    expect(el.querySelector('.callback-btn')?.textContent).toContain('details');
    expect(el.querySelector('.btn-primary')).toBeTruthy();
    // component.btnText='details';
    // fixture.detectChanges();
    // expect(el.querySelector('#edit-btn')).toBeTruthy();
    // const element=fixture.debugElement.query(By.css('#edit-btn'));
    // expect(element).toBeTruthy();
  })

  it('should add btn text active and button should be btn-success',(()=>{
    component.btnText='Activate';
    fixture.detectChanges();
    expect(el.querySelector('#edit-btn')).toBeFalsy();
    expect(el.querySelector('.edit-btn')).toBeFalsy();
    expect(component.btnText).toEqual('Activate');
    expect(el.querySelector('.callback-btn')?.textContent).toContain('Activate');
    expect(el.querySelector('.btn-success')).toBeTruthy();
  }))

  it('should add btn text deactive and button should be btn-danger',(()=>{
    component.btnText='Deactivate';
    fixture.detectChanges();
    expect(el.querySelector('#edit-btn')).toBeFalsy();
    expect(component.btnText).toEqual('Deactivate');
    expect(el.querySelector('.callback-btn')?.textContent).toContain('Deactivate');
    expect(el.querySelector('.btn-danger')).toBeTruthy();
  }))

});
