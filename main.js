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

	Randomize (width=this.field.length, height=this.field[0].length) {
		for (let i=0; i<height; i++) {
			for (let j=0; j<width; j++) {
				if (this.field[i][j] === hat) {
					this.field[i][j] = "░";
				}
			}
		}												// Replace existing hat with ░ first
		let hatRow = 0;
		let hatCol = 0;
		do {
			hatRow = Math.floor(Math.random() * height);
			hatCol = Math.floor(Math.random() * width);
		} while (hatRow === 0 && hatCol === 0);
		this.field[hatRow][hatCol] = hat;
	}



	// Print field //
	print() {
		clear();
		console.log("You need to find your hat without falling into the hole to win!");
		for(const f of this.field) {
			console.log(f.join(""));
		}

	}
	movePlayer(move) {
		let oldRow = this.positionRow; // For delete old path
		let oldCol = this.positionCol; // For delete old path
		let newRow = this.positionRow;
		let newCol = this.positionCol;
		switch (move) {
			case "w": newRow--;
			break;
			case "a": newCol--;
			break;
			case "s": newRow++;
			break;
			case "d": newCol++;
			break;
			default: console.log('Invalid Input, Please try again')
			return;
		}
		if (newRow < 0 || newRow >= this.field.length) {
			console.log("Do not move outside of the field, You Lose 💀");
			this.gameRun = false;
		}
		if (newCol < 0 || newCol >= this.field[0].length) {
			console.log("Do not move outside of the field, You Lose 💀");
			this.gameRun = false;
		}
		if (this.field[newRow][newCol] === hat) {
			console.log("You Win 🎉");
			this.gameRun = false;
		}
		else if (this.field[newRow][newCol] === hole) {
			console.log("You Lose 💀")
			this.gameRun = false;
		};
		this.field[oldRow][oldCol] = fieldCharacter; // For delete old path
		this.positionRow = newRow;
		this.positionCol = newCol;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}
}
// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.Randomize();

while (newGame.gameRun) {
	newGame.print();
	const move = prompt('Please move your character with w = up, a = left, s = down, d = right: ')
	newGame.movePlayer(move);
};
