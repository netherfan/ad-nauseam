import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';
import { Observable, ReplaySubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book = new ReplaySubject;
  apiBaseUrl = 'api/books';

  constructor(private http: HttpClient) {}

  findByTitle(title: string): Observable<Book>{
    return this.http.get<Book>(`${this.apiBaseUrl}/title/${title}`);
  }

  findById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiBaseUrl}/${id}`);
  }

  getAll() {
    return of ( BOOKS);
    // return this.http.get<Book[]>(`${this.apiBaseUrl}/`);
  }

  postBook(book: any): Observable<any> {
    BOOKS.push(book);
    return of (BOOKS);
  }
}
