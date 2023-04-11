import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = '/api/users';

  constructor (private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/signup`, user);
  }
}
