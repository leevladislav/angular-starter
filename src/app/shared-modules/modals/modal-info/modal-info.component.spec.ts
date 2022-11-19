import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoComponent } from './modal-info.component';

xdescribe('ModalInfoComponent', () => {
    let component: ModalInfoComponent;
    let fixture: ComponentFixture<ModalInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalInfoComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
