import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = '/api/users';
  userRole = new ReplaySubject;

  constructor (private http: HttpClient) {}

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiBaseUrl}/signup`, user);
  }

  getUser(email: string): Observable<any> {
    const userEmail = {email: email};
    return this.http.post<any>(`${this.apiBaseUrl}/user`, userEmail);
  }

  getUserRole(): Observable<any> {
    return of(this.userRole);
  }
}
