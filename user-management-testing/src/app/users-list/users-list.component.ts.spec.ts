import { COMPILER_OPTIONS } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActiveFilterPipe } from '../shared/pipes/active-pipe/activeFilter.pipe';
import { DeletedFilterPipe } from '../shared/pipes/delete-pipe/deletedFilter.pipe';
import { FullNamePipe } from '../shared/pipes/fullName-pipe/fullName.pipe';
import { SharedModule } from '../shared/shared.module';
import { UserType } from '../user';

import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let el:HTMLElement;
  let dummyData:UserType[]=[
    {
        "id": "1",
        "age": 66,
        "firstName": "Bradford",
        "lastName": "Ledner",
        "isDeleted": false,
        "login": "bradford.ledner",
        "password": "Brad3333",
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      },
      {
        "id": "2",
        "age": 51,
        "firstName": "Russel",
        "lastName": "Ratke",
        "isDeleted": true,
        "login": "russel.ratke",
        "password": "4UlQxVtOMA",
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      },
      {
        "id": "3",
        "age": 55,
        "firstName": "Mendy",
        "lastName": "Schmidt",
        "isDeleted": false,
        "login": "mendy.schmidt",
        "password": "tOBnf0UjK1",
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListComponent,ActiveFilterPipe,DeletedFilterPipe ],
      imports:[SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    component.users=dummyData;
    el=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create component',()=>{
    expect(component).toBeTruthy();
  })

  it('should defined all input variables',()=>{
    expect(component.users).toBeDefined();
    expect(component.btnText).toBeDefined();
    expect(component.filterType).toBeDefined();
  })

  it('should have app-user component within users-list',()=>{
    expect(el.querySelector('app-user')).toBeTruthy();
  })

  it('should check length of users without any filter type',()=>{
    const users=fixture.debugElement.queryAll(By.css('app-user'));
    expect(users.length).toEqual(dummyData.length);
  })

  it('should check length of users without active filter type',()=>{
    component.filterType='activeType';
    fixture.detectChanges();
    const users=fixture.debugElement.queryAll(By.css('app-user'));
    const activeDummyLength=dummyData.filter(d=>!d.isDeleted).length;
    expect(users.length).toEqual(activeDummyLength);
  })

  it('should check length of users without deleted filter type',()=>{
    component.filterType='deletedType';
    fixture.detectChanges();
    const users=fixture.debugElement.queryAll(By.css('app-user'));
    const deletedDummyLength=dummyData.filter(d=>d.isDeleted).length;
    expect(users.length).toEqual(deletedDummyLength);
  })
  

});
