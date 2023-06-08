import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagepageComponent } from './managepage.component';

describe('ManagepageComponent', () => {
  let component: ManagepageComponent;
  let fixture: ComponentFixture<ManagepageComponent>;
  let el:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepageComponent ],
      imports:[RouterModule.forRoot([]),HttpClientTestingModule,SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagepageComponent);
    component = fixture.componentInstance;
    el=fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have create button',()=>{
    expect(el.querySelector('.create-btn')).toBeTruthy();
    expect(el.querySelector('button')?.textContent).toContain('Create');
  })

  it('should have list-users component',()=>{
    expect(el.querySelector('.list-users')).toBeTruthy();
    expect(el.querySelector('app-users-list')).toBeTruthy();
  })

  it('should have an outlet container',()=>{
    expect(el.querySelector('router-outlet')).toBeTruthy();
  })

  it('shoud have btntext with value details',()=>{
    expect(component.btnText).toBeDefined();
    expect(component.btnText).toEqual('Details');
  })

  it('should have users defined and updated on initialization',waitForAsync(
    inject([UsersService],(_userService:UsersService)=>{
        expect(component.users).toBeDefined();
    expect(component.users.length).toEqual(0);
    const dummyData=[
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
    ]
    spyOn(_userService,'getUsers').and.returnValue(of(dummyData))
    component.ngOnInit();
    fixture.whenStable().then(()=>{
        expect(component.users).toEqual(dummyData);
    })
    })
  ))
});
