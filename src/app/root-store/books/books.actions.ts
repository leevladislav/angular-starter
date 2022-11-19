import { createAction, props } from '@ngrx/store';
import { BookInterface } from 'src/app/core/interfaces/books/book.interface';

export const getBooksList = createAction('[API/BOOKS] getBooksList');

export const getBooksListSuccess = createAction('[API/BOOKS] getBooksListSuccess', props<{ booksList: ReadonlyArray<BookInterface> }>());

export const getBooksListError = createAction(
    '[API/BOOKS] getBooksListError',
    props<{ title: Readonly<string>; message: Readonly<string> }>(),
);
