import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHeaderComponent } from './modal-header.component';

describe('ModalHeaderComponent', () => {
    let component: ModalHeaderComponent;
    let fixture: ComponentFixture<ModalHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalHeaderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render passed title', () => {
        component.title = 'Success';
        fixture.detectChanges();

        const renderedTitle = fixture.debugElement.children[0].nativeElement.textContent;
        expect(component.title).toBe(renderedTitle);
    });

    it('should render empty title', () => {
        component.title = '';
        fixture.detectChanges();

        const renderedTitle = '';
        expect(component.title).toBe(renderedTitle);
    });
});
