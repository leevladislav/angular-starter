import { createAction, props } from '@ngrx/store';
import { TokenInterface } from 'src/app/core/interfaces/auth/auth.interface';
import { LoginParamsInterface, SignupParamsInterface } from 'src/app/core/interfaces/auth/auth.params.interface';

export const login = createAction('[API/AUTH] login', props<{ params: Readonly<LoginParamsInterface> }>());

export const authSuccess = createAction('[API/AUTH] authSuccess', props<TokenInterface>());

export const loginError = createAction('[API/AUTH] loginError', props<{ title: Readonly<string>; message: Readonly<string> }>());

export const signup = createAction('[API/AUTH] signup', props<{ params: Readonly<SignupParamsInterface> }>());

export const signupError = createAction(
    '[API/AUTH SignupComponent] signupError',
    props<{ title: Readonly<string>; message: Readonly<string> }>(),
);

export const logout = createAction('[API/AUTH]');
