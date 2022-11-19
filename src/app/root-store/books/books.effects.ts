import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { BookInterface } from 'src/app/core/interfaces/books/book.interface';
import { ModalInfoService } from 'src/app/core/services/modal-info.service';

import { BooksService } from '../../core/services/books/books.service';
import { getBooksList, getBooksListError, getBooksListSuccess } from './books.actions';

@Injectable()
export class BooksEffects {
    constructor(
        private actions$: Actions,
        private booksService: BooksService,
        private router: Router,
        private modalInfoService: ModalInfoService,
    ) {}

    getBooksList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooksList),
            switchMap(() =>
                this.booksService.fetch().pipe(
                    map((booksList: ReadonlyArray<BookInterface>) => getBooksListSuccess({ booksList })),
                    catchError(err => of(getBooksListError({ title: 'Error', message: err.error.message }))),
                ),
            ),
        ),
    );

    getBooksListError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBooksListError),
            switchMap((action: { title: string; message: string }): Observable<boolean | undefined> => {
                return this.modalInfoService.openModal(action.title, action.message);
            }),
            switchMap(() => of(getBooksList())),
            tap(() => this.router.navigate(['/home'])),
        ),
    );
}
