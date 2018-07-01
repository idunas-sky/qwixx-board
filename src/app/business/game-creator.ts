import {Color, Game, Move, Row, Tile} from '../models';

export class GameCreator {
    public static createNormalGame(): Game {
        const red = new Row([
            new Tile(2, Color.Red),
            new Tile(3, Color.Red),
            new Tile(4, Color.Red),
            new Tile(5, Color.Red),
            new Tile(6, Color.Red),
            new Tile(7, Color.Red),
            new Tile(8, Color.Red),
            new Tile(9, Color.Red),
            new Tile(10, Color.Red),
            new Tile(11, Color.Red),
            new Tile(12, Color.Red),
        ]);

        const yellow = new Row([
            new Tile(2, Color.Yellow),
            new Tile(3, Color.Yellow),
            new Tile(4, Color.Yellow),
            new Tile(5, Color.Yellow),
            new Tile(6, Color.Yellow),
            new Tile(7, Color.Yellow),
            new Tile(8, Color.Yellow),
            new Tile(9, Color.Yellow),
            new Tile(10, Color.Yellow),
            new Tile(11, Color.Yellow),
            new Tile(12, Color.Yellow),
        ]);

        const green = new Row([
            new Tile(12, Color.Green),
            new Tile(11, Color.Green),
            new Tile(10, Color.Green),
            new Tile(9, Color.Green),
            new Tile(8, Color.Green),
            new Tile(7, Color.Green),
            new Tile(6, Color.Green),
            new Tile(5, Color.Green),
            new Tile(4, Color.Green),
            new Tile(3, Color.Green),
            new Tile(2, Color.Green),
        ]);

        const blue = new Row([
            new Tile(12, Color.Blue),
            new Tile(11, Color.Blue),
            new Tile(10, Color.Blue),
            new Tile(9, Color.Blue),
            new Tile(8, Color.Blue),
            new Tile(7, Color.Blue),
            new Tile(6, Color.Blue),
            new Tile(5, Color.Blue),
            new Tile(4, Color.Blue),
            new Tile(3, Color.Blue),
            new Tile(2, Color.Blue),
        ]);

        return new Game(new Move(red, yellow, green, blue));
    }
}
