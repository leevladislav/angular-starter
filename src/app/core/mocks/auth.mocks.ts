import { TokenInterface } from '../interfaces/auth/auth.interface';
import { LoginParamsInterface, SignupParamsInterface } from '../interfaces/auth/auth.params.interface';

export const mockLoginParams: LoginParamsInterface = {
    email: 'test@gmail.com',
    password: 'asdASD123!',
};

export const mockSignupParams: SignupParamsInterface = {
    name: 'test',
    email: 'test@gmail.com',
    password: 'asdASD123!',
};

export const mockTokens: TokenInterface = {
    accessToken:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGdtYWlsLmNvbSIsInVzZXJJZCI6IjYzNmJmZmE2N2U5OTdmNWI4ZTQ5ZWYxNCIsImlhdCI6MTY2ODAyMjE4MywiZXhwIjoxNjY4MDY1MzgzfQ.5z8kH_dgpAux8w29dxl_x6NhwBiKfRux6n1uZqtjDlI',
};
