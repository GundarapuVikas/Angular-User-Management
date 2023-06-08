import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { UserType } from '../user';

describe('Users Service',()=>{
    let service:UsersService;
    let httptestControl: HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[UsersService]
        });
        service=TestBed.inject(UsersService);
        httptestControl=TestBed.inject(HttpTestingController);
    });
    it('HttpClient get users method',()=>{
        var dummyData:UserType[]=[
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
              }
        ];
        service.getUsers().subscribe((data)=>{
            //main testing response of http call
            expect(dummyData).toBe(data)
        })
        //this is written to make the http call for tests but not actuL Call
        const req=httptestControl.expectOne('http://localhost:9000/users')
        //testing http call
        expect(req.cancelled).toBeFalsy();
        expect(req.request.method).toBe('GET')
        expect(req.request.responseType).toEqual('json');
        req.flush(dummyData);//sends mock result data to compare with subscribed data;
        httptestControl.verify();//checks only the url mentioned above is used
     });

     it('HttpClient getUserById method',()=>{

        service.getUserById('2').subscribe(data=>{
            expect(data).toEqual({"id":"2","age": 51,"firstName": "Russel","lastName": "Ratke","isDeleted": true,"login": "russel.ratke","password": "4UlQxVtOMA","lastUpdated": new Date("2023-04-19T04:08:18.799Z")})
        });
        //this is written to make the http call for tests but not actuL Call
        const req=httptestControl.expectOne('http://localhost:9000/users/2')
        //testing http call
        expect(req.cancelled).toBeFalsy();
        expect(req.request.method).toBe('GET')
        expect(req.request.responseType).toEqual('json');
        req.flush({
            "id": "2",
            "age": 51,
            "firstName": "Russel",
            "lastName": "Ratke",
            "isDeleted": true,
            "login": "russel.ratke",
            "password": "4UlQxVtOMA",
            "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
          });//sends mock result data to compare with subscribed data;
        httptestControl.verify();//checks only the url mentioned above is used
     });

     it('httpClient updateUser method',()=>{
        const dummyUpdatedUser:UserType={
            "id": "1",
            "age": 36,
            "firstName": "Bradford",
            "lastName": "Ledner",
            "isDeleted": false,
            "login": "bradford.ledner",
            "password": "Ford360",
            "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        }

        service.updateUser(dummyUpdatedUser,"1").subscribe(data=>{
            expect(data).toEqual(dummyUpdatedUser);
        })
        const req=httptestControl.expectOne({
            method:'PUT',
            url:'http://localhost:9000/users/1'
        })
        expect(req.cancelled).toBeFalsy();
        expect(req.request.method).toBe('PUT')
        expect(req.request.responseType).toEqual('json');
        req.flush(dummyUpdatedUser)
        httptestControl.verify();
     })

     it('httpclient addUser method',()=>{
        const dummyUsers:UserType[]=[
            {
            "id": "1",
            "age": 36,
            "firstName": "Bradford",
            "lastName": "Ledner",
            "isDeleted": false,
            "login": "bradford.ledner",
            "password": "Ford360",
            "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
            }
        ]
        const newUser:UserType={
            "id": "75",
            "age": 20,
            "firstName": "Vikas",
            "lastName": "G",
            "isDeleted": true,
            "login": "vikas.g",
            "password": "vikas@575",
            "lastUpdated": new Date("2023-04-19T04:08:18.799Z")
        }
        // const dummyLength=dummyUsers.length;
        // const l=service.users.length;
        service.addUser(newUser).subscribe(data=>{
            expect(data).toEqual(newUser);
            // expect(service.users).toEqual(1);
        })

        const req=httptestControl.expectOne({
            method:'POST',
            url:'http://localhost:9000/users'
        })
        expect(req.cancelled).toBeFalsy();
        expect(req.request.method).toBe('POST')
        expect(req.request.responseType).toEqual('json');
        req.flush(newUser)
        httptestControl.verify();
     })
});
