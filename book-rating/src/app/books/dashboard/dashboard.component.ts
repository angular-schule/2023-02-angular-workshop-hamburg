import { Component } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '123',
        title: 'Angular',
        description: 'Grundlagen und mehr',
        price: 36.9,
        rating: 5
      },
      {
        isbn: '456',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        price: 32.9,
        rating: 3
      }
    ];
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook]
      .sort((a, b) => b.rating - a.rating);
  }
}
