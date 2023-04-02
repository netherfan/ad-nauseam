import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of (BOOKS);
  }
}
