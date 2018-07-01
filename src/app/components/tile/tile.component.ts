import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tile, TileStatus} from '../../models';

@Component({
    selector: 'app-tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['tile.component.scss']
})
export class TileComponent {
    @Input()
    public tile: Tile;
}
