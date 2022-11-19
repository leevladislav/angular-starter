import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { LoginParamsInterface, SignupParamsInterface } from '../../interfaces/auth/auth.params.interface';
import { mockTokens, mockLoginParams, mockSignupParams } from '../../mocks/auth.mocks';
import { TokenInterface } from '../../interfaces/auth/auth.interface';

describe('AuthService', () => {
    let service: AuthService;
    let httpController: HttpTestingController;

    let apiUrl = '/api/auth';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService],
        });

        service = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeDefined();
    });

    it('should call login() and return a token', () => {
        const params: LoginParamsInterface = mockLoginParams;

        service.login(params).subscribe((res: TokenInterface) => {
            expect(res).toEqual(mockTokens);
        });

        const req = httpController.expectOne({
            method: 'POST',
            url: `${apiUrl}/login`,
        });

        req.flush(mockTokens);
    });

    it('should call signup() and return a token', () => {
        const params: SignupParamsInterface = mockSignupParams;

        service.signup(params).subscribe((res: TokenInterface) => {
            expect(res).toEqual(mockTokens);
        });

        const req = httpController.expectOne({
            method: 'POST',
            url: `${apiUrl}/signup`,
        });

        req.flush(mockTokens);
    });

    it('should call logout()', () => {
        expect(service.logout).toHaveBeenCalledTimes(1);
        // TODO: check local storage is empty
    });

    afterEach(() => {
        httpController.verify();
    });
});
