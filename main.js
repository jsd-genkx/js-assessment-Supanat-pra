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
				this.field[i][j] = fieldCharacter; // clear all field
			}
		}

		const totalFields = width * height;
		const holePercentage = 0.2;
		const holeCount = Math.floor(totalFields * holePercentage);

		let placedHoles = 0;
		while (placedHoles < holeCount) {
		const holeRow = Math.floor(Math.random() * height);
		const holeCol = Math.floor(Math.random() * width);
		if (this.field[holeRow][holeCol] === fieldCharacter) {
			this.field[holeRow][holeCol] = hole;
			placedHoles++;							// random hole
			}
		}

		let hatRow = 0;
		let hatCol = 0;
		do {
			hatRow = Math.floor(Math.random() * height);
			hatCol = Math.floor(Math.random() * width);
		} while (this.field[hatRow][hatCol] !== fieldCharacter);
		this.field[hatRow][hatCol] = hat;	// random hat

		let playerRow, playerCol;
		do {
			playerRow = Math.floor(Math.random() * height);
			playerCol = Math.floor(Math.random() * width);
		} while (this.field[playerRow][playerCol] !== fieldCharacter || (playerRow === hatRow && playerCol === hatCol)
		);
		this.positionRow = playerRow;
		this.positionCol = playerCol;
		this.field[playerRow][playerCol] = pathCharacter; // random player
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
newGame.Randomize(); // use this code to randomize hat, player, hole

while (newGame.gameRun) {
	newGame.print();
	const move = prompt('Please move your character with w = up, a = left, s = down, d = right: ')
	newGame.movePlayer(move);
};
