import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import {RouterTestingModule} from '@angular/router/testing';
import { BackBtnComponent } from './back-btn.component';
import { SpyLocation } from '@angular/common/testing';

describe('BackBtnComponent', () => {
    let component: BackBtnComponent;
    let fixture: ComponentFixture<BackBtnComponent>;
    let button: HTMLElement;
    let fakeRouter = jasmine.createSpyObj('router', ['navigate']);
    // TODO: fix tests
    // let location: SpyLocation;
    // const locationStub = {
    //     back: jasmine.createSpy('back')
    // }
    // let location;
    // let location: Location;
    let fakeLocation = jasmine.createSpyObj('location', ['back']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BackBtnComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: Router, useValue: fakeRouter },
                // TODO: fix tests
                // { provide: Location, useValue: fakeLocation },
                // { provide: Location, useValue: locationStub },
                { provide: Location, useClass: SpyLocation },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BackBtnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // TODO: fix tests
        // location = TestBed.inject(SpyLocation);
        location = TestBed.inject(Location);

        button = fixture.debugElement.query(By.css('button')).nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call back() on button.click() from template with passed backUrl and return router.navigate(backUrl)', () => {
        const backUrl = '/profile';
        component.backUrl = backUrl;

        button.click();
        expect(fakeRouter.navigate).toHaveBeenCalledWith([backUrl]);
    });

    // TODO: fix tests
    xit('should call back() on button.click() from template with empty backUrl and return location.back()', () => {
        component.backUrl = '';

        // spyOn(component.location, 'back');
        // fakeRouter.initialNavigation();
        button.click();
        // expect(fakeRouter.navigate).toHaveBeenCalled();
        // expect(spyOn(location, 'back')).toHaveBeenCalled();
        fakeLocation.back.and.callFake(() => console.log('dasdasd'));
        // expect(fakeLocation.back).toHaveBeenCalled();
        // expect(location.back).toHaveBeenCalled();
    });
});
