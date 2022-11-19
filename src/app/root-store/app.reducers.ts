import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { AppState } from './app.state';
import { booksKey } from './books/books.keys';
import { getBooksListReducer } from './books/books.reducers';

export const reducers: ActionReducerMap<AppState> = {
    [booksKey]: getBooksListReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
