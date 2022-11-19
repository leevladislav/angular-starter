import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { ModalCropImageInterface } from './modal-crop-image.interface';

@Component({
    selector: 'app-modal-crop-image',
    templateUrl: './modal-crop-image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCropImageComponent {
    imageFile: File = this.data.imageFile;

    croppedImage!: ImageCroppedEvent;

    error = false;

    isLoading = true;

    resizeToWidth = this.data.resizeToWidth || 1110;

    aspectRatio = this.data.aspectRatio || 16 / 10;

    roundCropper = this.data.roundCropper || false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: ModalCropImageInterface, private dialogRef: MatDialogRef<ModalCropImageComponent>) {}

    imageCropped(event: ImageCroppedEvent): void {
        this.croppedImage = event;
    }

    imageLoaded(): void {
        this.isLoading = false;
    }

    loadImageFailed(): void {
        this.error = true;
    }

    cropImage(): void {
        this.dialogRef.close(this.croppedImage);
    }
}
