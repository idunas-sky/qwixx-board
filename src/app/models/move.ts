import {Row} from './row';

export class Move {
    public redRow: Row;
    public yellowRow: Row;
    public greenRow: Row;
    public blueRow: Row;
    public failCount = 0;

    public get failScore(): number {
        return this.failCount * 5;
    }

    public get totalScore(): number {
        const score = this.redRow.score + this.yellowRow.score + this.greenRow.score + this.blueRow.score;
        return score - this.failScore;
    }

    constructor(redRow: Row, yellowRow: Row, greenRow: Row, blueRow: Row) {
        this.redRow = redRow;
        this.yellowRow = yellowRow;
        this.greenRow = greenRow;
        this.blueRow = blueRow;
    }
}
