"use strict";

const RED = 1;
const BLACK = 2;

class Board {
	constructor(){
		this.columns = [];
		this.turn = RED;

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

	switchTurn(){
		if (this.turn === RED){
			this.turn = BLACK
		} else {
			this.turn = RED
		};
	}
};

var board = new Board();

$(document).ready(function(){
	
	$('#play-button').click(function(){
		$('.column-button').show();
		$(this).hide();
	})

	$('.column-button').click(function(){
		var colID = $(this).attr('id').split("-")[1]
		board.addItem(colID,board.turn);
	})
})