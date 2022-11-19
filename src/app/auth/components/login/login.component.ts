import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginParamsInterface } from 'src/app/core/interfaces/auth/auth.params.interface';
import { login } from 'src/app/root-store/auth/auth.actions';

import { unsubscribe } from '../../../core/utils/unsubscriber';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
    form: FormGroup = this.fb.group({
        email: ['vladislavlee.xx@gmail.com', [Validators.required, Validators.email]],
        password: ['asdASD123!', [Validators.required, Validators.minLength(6)]],
    });

    hidePassword = true;

    private subscriptions: Subscription[] = [];

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnDestroy(): void {
        unsubscribe(this.subscriptions);
    }

    handleLogin(): void {
        this.form.disable();

        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }

        this.login(this.form.value);
    }

    private login(params: LoginParamsInterface): void {
        this.store.dispatch(login({ params }));
        // TODO: this.form.enable(); after error
    }
}
