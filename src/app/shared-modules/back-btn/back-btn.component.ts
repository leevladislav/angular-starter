import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-btn',
    templateUrl: './back-btn.component.html',
    styleUrls: ['./back-btn.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackBtnComponent {
    @Input() backUrl: string = '';

    constructor(private router: Router, private location: Location) {}

    back(): Promise<boolean> | void {
        return this.backUrl ? this.router.navigate([this.backUrl]) : this.location.back();
    }
}
