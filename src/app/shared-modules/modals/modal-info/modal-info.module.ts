import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ModalHeaderModule } from '../modal-header/modal-header.module';
import { ModalInfoComponent } from './modal-info.component';

@NgModule({
    declarations: [ModalInfoComponent],
    imports: [CommonModule, ModalHeaderModule, MatDialogModule, MatButtonModule],
    exports: [ModalInfoComponent],
})
export class ModalInfoModule {}
