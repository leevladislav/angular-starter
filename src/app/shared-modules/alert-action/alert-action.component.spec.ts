import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertActionComponent } from './alert-action.component';

xdescribe('AlertActionComponent', () => {
    let component: AlertActionComponent;
    let fixture: ComponentFixture<AlertActionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlertActionComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlertActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
