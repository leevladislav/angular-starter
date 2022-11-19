import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ModalInfoComponent } from '../../shared-modules/modals/modal-info/modal-info.component';

@Injectable({
    providedIn: 'root',
})
export class ModalInfoService {
    constructor(public dialog: MatDialog) {}

    openModal(title: string, message: string): Observable<boolean | undefined> {
        return this.dialog
            .open(ModalInfoComponent, {
                data: { title, message },
                panelClass: ['primary-modal'],
                autoFocus: false,
            })
            .afterClosed();
    }
}
