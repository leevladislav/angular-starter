import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCropImageComponent } from './modal-crop-image.component';

xdescribe('ModalCropImageComponent', () => {
    let component: ModalCropImageComponent;
    let fixture: ComponentFixture<ModalCropImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalCropImageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalCropImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
