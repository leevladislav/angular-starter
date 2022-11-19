import { createReducer, on } from '@ngrx/store';
import { BookInterface } from 'src/app/core/interfaces/books/book.interface';

import { getBooksListSuccess } from './books.actions';

export const initialState: Readonly<BookInterface[]> = [];

export const getBooksListReducer = createReducer(
    initialState,

    on(getBooksListSuccess, (state, { booksList }) => booksList),
);
