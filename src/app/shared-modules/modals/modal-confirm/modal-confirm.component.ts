import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styleUrls: ['./modal-confirm.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalConfirmComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA)
        public data: {
            title?: string;
            text: string;
        },
    ) {}
}
