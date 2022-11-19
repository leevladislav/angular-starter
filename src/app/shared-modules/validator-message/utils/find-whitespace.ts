import { AbstractControl, ValidatorFn } from '@angular/forms';

export function findWhitespace(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } | null => {
        const isWhiteSpaceExist = control && control.value && !control.value.replace(/\s/g, '').length;

        return isWhiteSpaceExist ? { whitespace: controlName } : null;
    };
}
