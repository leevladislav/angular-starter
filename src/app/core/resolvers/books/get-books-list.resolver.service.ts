import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { getBooksList } from 'src/app/root-store/books/books.actions';

@Injectable({
    providedIn: 'root',
})
export class GetBooksListResolver implements Resolve<void> {
    constructor(private store: Store) {}

    resolve(): void {
        this.store.dispatch(getBooksList());
    }
}
