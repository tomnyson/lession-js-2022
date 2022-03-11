class snake{
	constructor(game) {
		this.game = game;
		this.x = 0;
		this.y = 0;
		this.grid = 10;
		this.dx = this.grid;
		this.dy = 0;
		this.cell = [];
		this.maxCells = 2;
	}

	update() {
		if(this.endGame()){
			this.x += this.dx;
			this.y += this.dy;
		}

		if(this.x >= this.game.canvas.width){
			this.x = 0;
		}

		else if(this.x < 0){
			this.x = this.game.canvas.width;
		}

		if(this.y >= this.game.canvas.height){
			this.y = 0;
		}

		else if(this.y < 0){
			this.y = this.game.canvas.height;
		}

		this.cell.unshift({x: this.x, y: this.y});
		if(this.cell.length > this.maxCells){
			this.cell.pop();
		}
		this.catchHandle();
		//console.log(this.cell);
		
	}

	draw() {
		for(let i = 0; i < this.cell.length; i++){
			this.game.context.fillStyle = 'white';
			this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
		}

		if(!this.endGame()) {
			this.game.context.font = '30px Arial';
			this.game.context.fillText("Thua roi huhu", 200, 200);
		}
	}

	catchHandle() {
		document.addEventListener('keydown', (e) => {
			if(e.which == 37 && this.dx == 0){
				this.dx = -this.grid;
				this.dy = 0;
			}

			else if(e.which == 38 && this.dy == 0){
				this.dx = 0;
				this.dy = -this.grid;
			}

			else if(e.which == 39 && this.dx == 0){
				this.dx = this.grid;
				this.dy = 0;
			}

			else if(e.which == 40 && this.dy == 0){
				this.dx = 0;
				this.dy = this.grid;
			}
		});
	}

	eat(x, y) {
		if(this.x == x && this.y == y){
			this.maxCells++;
			return true;
		}
		return false;
	} 

	endGame(){
		for(let i = 1; i < this.cell.length; i++){
			if(this.x == this.cell[i].x && this.y == this.cell[i].y){
				return false;
			}
		}
		return true;
	}
}