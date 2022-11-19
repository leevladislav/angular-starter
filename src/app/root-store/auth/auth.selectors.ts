import { createFeatureSelector } from '@ngrx/store';
import { AuthInterface } from 'src/app/core/interfaces/auth/auth.interface';

import { authKey } from './auth.keys';

export const authSelector = createFeatureSelector<AuthInterface>(authKey);
