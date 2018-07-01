import {Component, Input} from '@angular/core';
import {Move} from '../../models';

@Component({
    selector: 'app-result',
    templateUrl: 'result.component.html',
    styleUrls: ['result.component.scss']
})
export class ResultComponent {
    @Input()
    public move: Move;
}
