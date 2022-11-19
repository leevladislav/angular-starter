import { BookInterface } from '../core/interfaces/books/book.interface';
import { booksKey } from './books/books.keys';

export interface AppState {
    [booksKey]: Readonly<BookInterface[]>;
}
