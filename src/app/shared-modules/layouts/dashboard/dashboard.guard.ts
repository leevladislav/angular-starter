import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from '../../../core/services/auth/auth.service';

@Injectable({
    providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return of(true);
        }

        this.router.navigate(['/auth/login']);

        return of(false);
    }
}
