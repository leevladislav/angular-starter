import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AlertActionComponent } from './alert-action.component';

@NgModule({
    declarations: [AlertActionComponent],
    imports: [CommonModule, MatCardModule],
    exports: [AlertActionComponent],
})
export class AlertActionModule {}
