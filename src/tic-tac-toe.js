class TicTacToe {
    constructor(size = 3) {
        this.field = new Array(size).map(() => new Array(size).map(() => null));
        this.turn = 0;
        this.players = ['x', 'o'];
    }

    getCurrentPlayerSymbol() {
        console.log(this.players[this.turn % 2]);
        return this.players[this.turn % 2];
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.getFieldValue(rowIndex, columnIndex)) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {
        if (this.noMoreTurns() === true || this.getWinner() === true) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        let win = false;
        let rowIndex, colIndex;
        for (rowIndex = 0; rowIndex < this.field.length; rowIndex) {
            for (colIndex = 0; colIndex < this.field[0].length - 1; colIndex++) {
                if (win !== this.field.length && this.field[rowIndex][colIndex] === this.field[rowIndex][colIndex + 1]) {
                    win = win + 1;
                } else if (win === this.field.length) {
                    break;
                }
                else {
                    continue;
                }
                return (win === this.field.length);
            }
        }
        for (colIndex = 0; colIndex < this.field[0].length; colIndex++) {
            for (rowIndex = 0; rowIndex < this.field.length - 1; rowIndex) {
                if (win !== this.field.length && this.field[rowIndex][colIndex] === this.field[rowIndex + 1][colIndex]) {
                    win = win + 1;
                } else if (win === this.field.length) {
                    break;
                }
                else {
                    continue;
                }
                return (win === this.field.length);
            }
        }
        for (colIndex = 0; colIndex < this.field[0].length - 1; colIndex++) {
            for (rowIndex = 0; rowIndex < this.field.length - 1; rowIndex) {
                let win = false;
                if (win !== this.field.length && colIndex === rowIndex && this.field[rowIndex][colIndex] === this.field[rowIndex + 1][colIndex + 1]) {
                    win = win + 1;
                } else if (win === this.field.length) {
                    break;
                }
                else {
                    continue;
                }
                return (win === this.field.length);
            }
        }
        return (win === this.field.length);
    }

    noMoreTurns() {
        return this.field.every(row => row.every(Boolean));
    }

    isDraw() {
        if (this.isFinished() === true && this.getWinner() === false){
            return true;
        } else {
            return false;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        console.log(this.field[rowIndex][colIndex]);
        return this.field[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
