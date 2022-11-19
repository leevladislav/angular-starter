import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BackBtnComponent } from './back-btn.component';

@NgModule({
    declarations: [BackBtnComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [BackBtnComponent],
})
export class BackBtnModule {}
