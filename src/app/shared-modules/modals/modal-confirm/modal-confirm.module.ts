import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ModalHeaderModule } from '../modal-header/modal-header.module';
import { ModalConfirmComponent } from './modal-confirm.component';

@NgModule({
    declarations: [ModalConfirmComponent],
    imports: [CommonModule, ModalHeaderModule, MatDialogModule, MatButtonModule],
    exports: [ModalConfirmComponent],
})
export class ModalConfirmModule {}
