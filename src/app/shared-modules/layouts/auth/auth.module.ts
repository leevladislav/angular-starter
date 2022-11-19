import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { LoginComponent } from '../../../auth/components/login/login.component';
import { SignupComponent } from '../../../auth/components/signup/signup.component';
import { ValidatorMessageModule } from '../../validator-message/validator-message.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
    declarations: [AuthComponent, LoginComponent, SignupComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ValidatorMessageModule,
        MatButtonModule,
    ],
})
export class AuthModule {}
