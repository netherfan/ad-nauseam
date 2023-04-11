import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiBaseUrl = 'api/books';

  constructor(private http: HttpClient) {}

  findByTitle(title: string): Observable<Book>{
    return this.http.get<Book>(`${this.apiBaseUrl}/title/${title}`);
  }
}
