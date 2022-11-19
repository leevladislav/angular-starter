import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

import { hasOwnProperty } from '../../core/utils/has-own-property';
import { validatePasswordByPattern } from './utils/validate-password-by-pattern';

@Component({
    selector: 'app-validator-message',
    templateUrl: './validator-message.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
})
export class ValidatorMessageComponent {
    @Input() field!: AbstractControl | null | undefined;

    @Input() key!: string;

    validatorMessages(): string[] {
        const field = this.field;

        if (!field || !field.errors) {
            return [];
        }

        const errors: string[] = [];
        const config: Record<string, string> = this.getErrorsList(field.errors);

        Object.keys(field.errors).forEach((error: string) => {
            if (error === 'pattern') {
                switch (this.key) {
                    case 'phone':
                        errors.push(`${config[error]} phone number`);
                        break;
                    case 'password':
                    case 'repeatPassword':
                        errors.push(validatePasswordByPattern(this.field?.errors?.pattern.actualValue));
                        break;
                    default:
                        errors.push(`${config[error]} ${this.key}`);
                }
            } else {
                errors.push(config[error]);
            }
        });

        return errors;
    }

    getErrorsList(errors: ValidationErrors): Record<string, string> {
        const config: Record<string, string> = {
            matDatepickerParse: 'Required field',
            required: 'Required field',
            requiredTrue: 'Value must be greater than zero',
            email: 'Invalid e-mail',
            pattern: 'Invalid',
            passwordNotEqual: "Passwords don't match",
            oldPasswordAreEqual: "The new password's the same as the old one",
        };

        if (hasOwnProperty(errors, 'custom')) {
            config.custom = typeof errors.custom === 'string' && errors.custom.length ? errors.custom : 'Invalid format';
        }

        if (hasOwnProperty(errors, 'minlength')) {
            config.minlength = `Minimum ${errors.minlength.requiredLength} chars`;
        }

        if (hasOwnProperty(errors, 'maxlength')) {
            config.maxlength = `Maximum ${errors.maxlength.requiredLength} chars`;
        }

        if (hasOwnProperty(errors, 'min')) {
            config.min = `Minimum value is ${errors.min.min}`;
        }

        if (hasOwnProperty(errors, 'max')) {
            config.max = `Maximum value is ${errors.max.max}`;
        }

        if (hasOwnProperty(errors, 'whitespace')) {
            config.whitespace = `${errors.whitespace} cannot be empty`;
        }

        return config;
    }
}
