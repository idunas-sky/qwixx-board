import {Component, Input} from '@angular/core';
import {Row, Tile, TileStatus} from '../../models';

@Component({
    selector: 'app-row',
    templateUrl: 'row.component.html',
    styleUrls: ['row.component.scss']
})
export class RowComponent {
    @Input()
    public row: Row;

    public onTileClicked(tile: Tile) {
        const error = this.row.tryCrossTile(tile);
        if (error) {
            // TODO: Show error to user
        }
    }

    public onCloseRowClicked() {
        this.row.lockRow(false);
    }
}

