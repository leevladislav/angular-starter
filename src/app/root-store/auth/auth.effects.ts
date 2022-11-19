import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { TokenInterface } from 'src/app/core/interfaces/auth/auth.interface';
import { LoginParamsInterface, SignupParamsInterface } from 'src/app/core/interfaces/auth/auth.params.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ModalInfoService } from 'src/app/core/services/modal-info.service';

import { authSuccess, login, loginError, logout, signup, signupError } from './auth.actions';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private modalInfoService: ModalInfoService,
    ) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((action: { params: LoginParamsInterface }) =>
                this.authService.login(action.params).pipe(
                    map((res: TokenInterface) => authSuccess(res)),
                    catchError(err => of(loginError({ title: 'Error', message: err.error.message }))),
                ),
            ),
        ),
    );

    authSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(authSuccess),
                tap((action: TokenInterface) => this.authService.setToken(action.accessToken)),
                tap(() => this.router.navigate(['/home'])),
            ),
        { dispatch: false },
    );

    loginError$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loginError),
                switchMap((action: { title: string; message: string }): Observable<boolean | undefined> => {
                    return this.modalInfoService.openModal(action.title, action.message);
                }),
            ),
        { dispatch: false },
    );

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signup),
            switchMap((action: { params: SignupParamsInterface }) =>
                this.authService.signup(action.params).pipe(
                    map((res: TokenInterface) => authSuccess(res)),
                    catchError(err => of(loginError({ title: 'Error', message: err.error.message }))),
                ),
            ),
        ),
    );

    signupError$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(signupError),
                switchMap((action: { title: string; message: string }): Observable<boolean | undefined> => {
                    return this.modalInfoService.openModal(action.title, action.message);
                }),
            ),
        { dispatch: false },
    );

    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => localStorage.clear()),
            ),
        { dispatch: false },
    );
}
