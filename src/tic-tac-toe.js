class TicTacToe {
    constructor(size = 3) {
        this.size = size;
        this.field = [];
        for (let i = 0; i < size; i++) {
            this.field[i] = [];
            for (let j = 0; j < size; j++) {
                this.field[i][j] = null;
            }
        }
        this.turn = 0;
        this.players = ['x', 'o'];
    }

    getCurrentPlayerSymbol() {
        return this.players[this.turn % 2];
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.getFieldValue(rowIndex, columnIndex)) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.noMoreTurns();
    }

    getWinner() {
        let i, j;
        let primaryDiagonal = this.field[0][0];
        let secondaryDiagonal = this.field[0][this.size - 1];
        for (i = 0; i < this.size; i++) {
            let row = this.field[i][0];
            let col = this.field[0][i];
            //Check primary diagonal
            if (this.field[i][i] !== primaryDiagonal) {
                primaryDiagonal = null;
            }
            //Check secondary diagonal
            if (this.field[i][this.size - i - 1] !== secondaryDiagonal) {
                secondaryDiagonal = null;
            }

            for (j = 0; j < this.size; j++) {
                //Check row
                if (this.field[i][j] !== row) {
                    row = null;
                }
                //Check col
                if (this.field[j][i] !== col) {
                    col = null;
                }
            }
            //If got row or col match, we have a winner
            if (row || col) {
                return row || col;
            }
        }
        //finally, if any diagonal matches, return it
        return primaryDiagonal || secondaryDiagonal;
    }

    noMoreTurns() {
        return this.field.every(row => row.every(Boolean));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
