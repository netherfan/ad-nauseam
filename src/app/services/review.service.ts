import { Review } from 'src/app/models/review.model';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { REVIEWS } from '../mocks/reviews.mock';
import { Book } from '../models/book.model';
import { BOOKS } from '../mocks/books.mock';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  review = new ReplaySubject;
  apiBaseUrl = '/api/reviews';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    // return this.http.get<Review[]>(`${this.apiBaseUrl}/`);
    return of(REVIEWS);
  }

  getReviewsByBook(book: Book) {
    const reviews = [];
    for(var b of REVIEWS) {
      if(b.title === book.title) {
        reviews.push(b);
      }
    }
    return of(reviews);
  }
}
