import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, share, shareReplay, switchMap } from 'rxjs';
import { BooksService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  bs = inject(BooksService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn')!),
    switchMap(isbn => this.bs.booksIsbnGet(isbn)),
    catchError((error: HttpErrorResponse) => of({
      isbn: '000',
      title: 'FEHLER',
      description: error.message,
      price: 0,
      rating: 1
    }))
  )

}
