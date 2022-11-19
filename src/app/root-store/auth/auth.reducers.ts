import { createReducer, on } from '@ngrx/store';

import { authSuccess } from './auth.actions';

export const initialState = {};

export const getAuthReducer = createReducer(
    initialState,

    // TODO: store login history (date, device, ip, location) on Privacy page
    on(authSuccess, state => state),
);
