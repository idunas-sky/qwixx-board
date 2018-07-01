import {Move} from './move';

export class Game {
    public moveHistory: Move[] = [];
    public currentMove: Move;

    constructor(init: Move) {
        this.currentMove = init;
    }
}
