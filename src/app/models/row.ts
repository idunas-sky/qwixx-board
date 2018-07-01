import {TileStatus} from './tile-status';
import {Tile} from './tile';

export class Row {
    private _wasClosedByUser = false;
    private _isLocked = false;
    public tiles: Tile[];

    public get isLocked() {
        return this._isLocked;
    }

    public get score(): number {
        // Qwixx-Score-Formula is: 1/2 * n * (n + 1)
        let countCrossed = this.tiles.filter(tile => tile.status === TileStatus.Crossed).length;
        if (this._wasClosedByUser) {
            // User gets a bonus point if he / she closed the row
            countCrossed++;
        }

        return 0.5 * countCrossed * (countCrossed + 1);
    }

    constructor(tiles: Tile[]) {
        this.tiles = tiles;
    }

    public tryCrossTile(tile: Tile): string {
        if (tile.status !== TileStatus.Available) {
            // User can only click on available tiles
            return 'ERROR_TILE_NOT_AVAILABLE';
        }

        // Last tile can only be closed if there are 5 crossed tiles
        if (tile === this.tiles[this.tiles.length - 1]) {
            if (this.tiles.filter(t => t.status === TileStatus.Crossed).length < 5) {
                // User is not allowed to close this row
                return 'ERROR_CANT_CLOSE_ROW';
            }

            // Close this row
            tile.status = TileStatus.Crossed;
            this.lockRow(true);
        }

        for (const t of this.tiles) {
            if (t === tile) {
                t.status = TileStatus.Crossed;
                break;
            }

            if (t.status === TileStatus.Available) {
                t.status = TileStatus.Unavailable;
            }
        }
    }

    public lockRow(closedByUser: boolean): void {
        this._wasClosedByUser = closedByUser;
        this._isLocked = true;

        for (const tile of this.tiles) {
            if (tile.status === TileStatus.Available) {
                tile.status = TileStatus.Unavailable;
            }
        }
    }
}
