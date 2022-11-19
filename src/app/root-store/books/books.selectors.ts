import { createFeatureSelector } from '@ngrx/store';
import { BookInterface } from 'src/app/core/interfaces/books/book.interface';

import { booksKey } from './books.keys';

export const booksListSelector = createFeatureSelector<BookInterface[]>(booksKey);
