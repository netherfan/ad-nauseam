import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  book: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.bookService.book.subscribe((res: any) => {
      this.book = res;
    })
  }
}
