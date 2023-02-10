import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush // ACHTUNG: Problem sobald AJAX gemacht wird
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {
    // this.bs.booksGet().subscribe(books => this.books = books);
  }

  doRateUp(book: Book) {
    // const ratedBook = this.rs.rateUp(book);
    // // const ratedBook  = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // }
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.rs.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    // this.books = [...this.books, newBook]
    //   .sort((a, b) => b.rating - a.rating);
  }
}
