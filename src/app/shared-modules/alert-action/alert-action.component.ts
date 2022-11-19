import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert-action',
    templateUrl: './alert-action.component.html',
    styleUrls: ['./alert-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertActionComponent {
    @Input() text!: string;
}
