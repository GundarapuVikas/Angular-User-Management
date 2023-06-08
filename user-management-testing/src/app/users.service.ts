import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  getUsers():Observable<UserType[]>{
    return this.http.get<UserType[]>('http://localhost:9000/users')
  }
  addUser(userData:UserType):Observable<any>{
    return this.http.post<UserType[]>('http://localhost:9000/users',userData)
  }
  updateUser(userData:UserType,id:string):Observable<UserType[]>{
    return this.http.put<UserType[]>(`http://localhost:9000/users/${id}`,userData);
  }
  getUserById(id:string):Observable<UserType>{
    return this.http.get<UserType>(`http://localhost:9000/users/${id}`);
  }
  deleteUser(id:string):Observable<UserType>{
    return this.http.delete<UserType>(`http://localhost:9000/users/${id}`);
  }
}
 