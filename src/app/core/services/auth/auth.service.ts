import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenInterface } from '../../interfaces/auth/auth.interface';
import { LoginParamsInterface, SignupParamsInterface } from '../../interfaces/auth/auth.params.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login(params: LoginParamsInterface): Observable<TokenInterface> {
        return this.http.post<TokenInterface>('/api/auth/login', params);
    }

    signup(params: SignupParamsInterface): Observable<TokenInterface> {
        return this.http.post<TokenInterface>('/api/auth/signup', params);
    }

    setToken(token: string): void {
        localStorage.setItem('auth-token', `Bearer ${token}`);
    }

    getToken(): string | null {
        return localStorage.getItem('auth-token');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('auth-token');
    }

    logout(): void {
        return localStorage.clear();
    }
}
