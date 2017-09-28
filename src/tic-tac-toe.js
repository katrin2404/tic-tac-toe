class TicTacToe {
    constructor(size = 3) {
        this.field = Array.apply(null, Array(size)).map(() => Array.apply(null, Array(size)).map(() => null));
        this.turn = 0;
        this.players = ['x', 'o'];
    }

    getCurrentPlayerSymbol() {
        /*        console.log(this.players[this.turn % 2]);*/
        return this.players[this.turn % 2];
    }

    nextTurn(rowIndex, columnIndex) {
        /*        console.log(this.turn + " player: " + this.players[this.turn % 2]);*/
        if (!this.getFieldValue(rowIndex, columnIndex)) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {
        if (this.getWinner() === true) {
            return this.getWinner();
        } else {
            return null;
        }
    }

    getWinner() {
        let i, j;
        for (i = 0; i < this.field.length; i++) {
            for (j = 0; j < this.field.length; j++) {
                if (this.field[i].every(cell => cell === this.field[i][0]) || this.field.every(row => row[j] = this.field[0][j]) || this.field[i][i] === this.getCurrentPlayerSymbol()) {
                    return this.getCurrentPlayerSymbol();
                }
                else {
                    return null;
                }
            }
        }
    }

    noMoreTurns() {
        return this.field.every(row => row.every(Boolean));
    }

    isDraw() {
        if (this.isFinished() === false || this.getWinner() === true) {
            return false;
        } else {
            return true;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
