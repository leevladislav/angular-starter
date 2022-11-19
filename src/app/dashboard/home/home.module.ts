import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AlertActionModule } from '../../shared-modules/alert-action/alert-action.module';
import { BackBtnModule } from '../../shared-modules/back-btn/back-btn.module';
import { ValidatorMessageModule } from '../../shared-modules/validator-message/validator-message.module';
import { BooksComponent } from './components/books/books.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent, BooksComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        AlertActionModule,
        MatButtonModule,
        BackBtnModule,
        MatIconModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        ValidatorMessageModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
})
export class HomeModule {}
