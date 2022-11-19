import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SignupParamsInterface } from 'src/app/core/interfaces/auth/auth.params.interface';
import { signup } from 'src/app/root-store/auth/auth.actions';

import { passwordPattern } from '../../../core/constants/patterns.const';
import { unsubscribe } from '../../../core/utils/unsubscriber';
import { matchPassword } from '../../../shared-modules/validator-message/utils/match-password';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnDestroy {
    form: FormGroup = this.fb.group({
        name: ['vlad', [Validators.required, Validators.maxLength(50)]],
        email: ['vladislavlee.xx@gmail.com', [Validators.required, Validators.email]],
        newPassword: this.fb.group(
            {
                password: ['asdASD123!', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]],
                repeatPassword: ['asdASD123!', [Validators.required]],
            },
            { validators: [matchPassword()] } as AbstractControlOptions,
        ),
    });

    hideNewPassword = true;

    hideRepeatNewPassword = true;

    private subscriptions: Subscription[] = [];

    constructor(private fb: FormBuilder, private store: Store) {}

    ngOnDestroy(): void {
        unsubscribe(this.subscriptions);
    }

    handleSignup(): void {
        this.form.disable();

        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }

        this.signup({
            name: this.form.value.name,
            email: this.form.value.email,
            password: this.form.value.newPassword.password,
        });
    }

    private signup(params: SignupParamsInterface): void {
        this.store.dispatch(signup({ params }));
        // TODO: this.form.enable(); after error
    }
}
