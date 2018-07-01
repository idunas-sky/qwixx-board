import {Component, OnInit} from '@angular/core';
import {Game} from './models';
import {GameCreator} from './business/game-creator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private readonly KEY_SAVEGAME = 'current-game';
    public game: Game;

    public ngOnInit(): void {
        if (!this.loadGame()) {
            this.createNewGame();
        }
    }

    private loadGame(): boolean {
        const existingGame = localStorage.getItem(this.KEY_SAVEGAME);
        if (existingGame) {
            this.game = Object.assign(new Game(null), JSON.parse(existingGame));
            return true;
        }

        return false;
    }

    private saveGame(): void {
        localStorage.setItem(this.KEY_SAVEGAME, JSON.stringify(this.game));
    }

    private createNewGame() {
        this.game = GameCreator.createNormalGame();
    }
}
