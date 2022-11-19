import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-header',
    templateUrl: './modal-header.component.html',
    styleUrls: ['./modal-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalHeaderComponent {
    @Input() title = '';
}
