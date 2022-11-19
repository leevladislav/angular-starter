import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookInterface } from 'src/app/core/interfaces/books/book.interface';
import { booksListSelector } from 'src/app/root-store/books/books.selectors';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
    books$: Observable<BookInterface[]> = this.store.select(booksListSelector);

    constructor(private store: Store) {}
}
