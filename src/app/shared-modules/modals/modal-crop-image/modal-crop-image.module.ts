import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ModalHeaderModule } from '../modal-header/modal-header.module';
import { ModalCropImageComponent } from './modal-crop-image.component';

@NgModule({
    declarations: [ModalCropImageComponent],
    imports: [CommonModule, ModalHeaderModule, ImageCropperModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule],
})
export class ModalCropImageModule {}
