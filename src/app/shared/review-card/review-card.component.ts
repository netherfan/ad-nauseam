import { ReviewService } from './../../services/review.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Review } from 'src/app/models/review.model';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  book: Book;
  reviews: Review[];
  totalReviews: number;
  reviewsEachPage = 4;
  page = 1;
  ratingPath = "../../../assets/images/difficolta-";

  constructor (
    private reviewService: ReviewService,
    private bookService: BookService
    ) {}

  ngOnInit(): void {
    this.takeReviews();
  }

  takeReviews() {
    this.reviewService.getReviews().pipe(take(1)).subscribe({
      next: (res) => {
        this.reviews = res;
        this.totalReviews = this.reviews.length;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  paginate(event) {
    event.page = event.page + 1;
    this.page = event.page;
  }

  getBookImage(title: string): string {
    this.bookService.findByTitle(title).pipe(take(1)).subscribe({
      next: (res) => {
        this.book = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
    return this.book.image;
  }

}
