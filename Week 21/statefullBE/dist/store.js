"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return GameManager.instance;
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    // e5e7
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = GameManager.getInstance();
