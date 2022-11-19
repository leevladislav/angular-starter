import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ModalHeaderComponent } from './modal-header.component';

@NgModule({
    declarations: [ModalHeaderComponent],
    imports: [CommonModule, MatIconModule],
    exports: [ModalHeaderComponent],
})
export class ModalHeaderModule {}
