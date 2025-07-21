"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
		this.gameRun = true;
	}

	// Print field //
	print() {
		

	}
	movePlayer(move) {
		switch (move) {
			case "w": this.positionRow--;
			break;
			case "a": this.positionCol--;
			break;
			case "s": this.positionRow++;
			break;
			case "d": this.positionCol++;
			break;
			default: console.log('Invalid Input, Please try again')
		}
	}
}


// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

while (newGame.gameRun) {
	newGame.print();
	const move = prompt('Please move your character with w = up, a = left, s = down, d = right: ')
	newGame.movePlayer(move);
}
