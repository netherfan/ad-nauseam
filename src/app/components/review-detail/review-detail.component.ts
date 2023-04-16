import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.scss']
})
export class ReviewDetailComponent implements OnInit{

  review: Review;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getReview();
  }

  getReview(){
    this.reviewService.review.subscribe((res: any) => {
      this.review = res;
    })
  }
}
