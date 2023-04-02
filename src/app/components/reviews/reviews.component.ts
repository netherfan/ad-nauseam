import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit{

  books: Book[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
