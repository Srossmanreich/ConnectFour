"use strict";

const RED = 1;
const BLACK = 2;

class Board {
	constructor(){
		this.columns = [];

		for(var i=0; i < 7; i++){
			this.columns.push([])
		}
	}

	getItem(x,y){
		return this.columns[x][y]
	}

	isColumnFull(x){
		return this.columns[x].length < 6
	}

	addItem(x,token){
		if (this.isColumnFull(x))
			this.columns[x].push(token)
	}
};

var board = new Board();
board.addItem(0,RED);
console.log(board.columns);