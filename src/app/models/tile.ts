import {Color} from './color';
import {TileStatus} from './tile-status';

export class Tile {
    public color: Color;
    public value: number;
    public status: TileStatus;

    constructor(value: number, color: Color) {
        this.value = value;
        this.color = color;
        this.status = TileStatus.Available;
    }
}
