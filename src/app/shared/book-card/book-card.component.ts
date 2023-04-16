import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  books: Book[];
  totalBooks: number;
  booksEachPage = 4;
  page = 1;
  ratingPath = "../../../assets/images/difficolta-";
  user: any;

  constructor (
    private bookService: BookService,
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      this.userService.userRole.subscribe({
        next: res => this.user.role = res
      })
    }
    this.takeBooks();
  }

  ngDoCheck(): void {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  takeBooks() {
    this.bookService.getAll().pipe(take(1)).subscribe({
      next: (res) => {
        this.books = res;
        this.totalBooks = this.books.length;
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

  // goToBook(book: Book) {
  //   this.bookService.book.next(book);
  //   this.router.navigate(['bookdetail']);
  // }

  goToReviews(book: Book) {
    this.bookService.book.next(book);
    this.router.navigate(['allreviews']);
  }
}
