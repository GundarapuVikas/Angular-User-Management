import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { ActivePageComponent } from './active-page.component';

describe('ActivePageComponent', () => {
  let component: ActivePageComponent;
  let fixture: ComponentFixture<ActivePageComponent>;
  let service:UsersService;
  let httptestControl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePageComponent ],
      imports:[HttpClientTestingModule,SharedModule],
      providers:[UsersService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service=TestBed.inject(UsersService);
    httptestControl=TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button text should be deactivate',()=>{
    expect(component.btnText).toEqual('Deactivate');
  })

  it('filter type should be active',()=>{
    expect(component.filterType).toEqual('activeType')
  })

  it('check whether users are initialized on ngonInit',waitForAsync(
    inject( [UsersService],(_userService:UsersService)=>{
      const dummy=[
        {
          "id": "75",
          "age": 20,
          "firstName": "Vikas",
          "lastName": "G",
          "isDeleted": true,
          "login": "vikas.g",
          "password": "vikas@575",
          "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        },
        {
          "id": "123",
          "firstName": "karthik",
          "lastName": "Kumar",
          "age": 21,
          "login": "kumar.Karthik",
          "password": "gopi1234",
          "isDeleted": true,
          "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        }
      ]
      spyOn(_userService,'getUsers').and.returnValue(of(dummy));
      component.ngOnInit();
      // fixture.detectChanges();
      fixture.whenStable().then(()=>{
        expect(component.users).toEqual(dummy);
      })
    } )
  ))

  it('should reduce users length by 1 when deactivate button is clicked',waitForAsync(
    inject([UsersService],(_userService:UsersService)=>{
      const dummy=[
        {
          "id": "75",
          "age": 20,
          "firstName": "Vikas",
          "lastName": "G",
          "isDeleted": false,
          "login": "vikas.g",
          "password": "vikas@575",
          "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        },
        {
          "id": "123",
          "firstName": "karthik",
          "lastName": "Kumar",
          "age": 21,
          "login": "kumar.Karthik",
          "password": "gopi1234",
          "isDeleted": false,
          "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        }
      ]
      spyOn(_userService,'getUsers').and.returnValue(of(dummy));
      component.ngOnInit();
      spyOn(_userService,'updateUser').and.returnValue(of({
        "id": "123",
        "firstName": "karthik",
        "lastName": "Kumar",
        "age": 21,
        "login": "kumar.Karthik",
        "password": "gopi1234",
        "isDeleted": true,
        "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
      }));
      const updatedUser=dummy[1];
      updatedUser.isDeleted=true;
      _userService.updateUser(updatedUser,'123').subscribe(data=>{
        expect(data).toEqual(updatedUser);
        expect(component.users.filter(u=>!u.isDeleted).length).toEqual(1);
      })
    })
  ))

});
