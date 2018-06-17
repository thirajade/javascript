function Cell(i, j, w){
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.neighbourCount = 0;
	this.mine = false;
	this.revealed = false;
}

Cell.prototype.show = function() {
	stroke(0);
	noFill();
	rect(this.x, this.y, this.w, this.w);
	if(this.revealed){
		if(this.mine){
			fill(100);
			ellipse(this.x + (this.w * 0.5), this.y + (this.w * 0.5), this.w * 0.5);
		} else {
			fill(200);
			rect(this.x, this.y, this.w, this.w);
			if(this.neighbourCount > 0)
			{
				fill(0);
				text(this.neighbourCount, this.x + (this.w * 0.5) - 3, this.y + (this.w * 0.5) + 3);
			}
		}
	}
}

Cell.prototype.contain = function(x, y) {
	return ((x > this.x) && 
		     (x < this.x + this.w) && 
		     (y > this.y) && 
		     (y < this.y + this.w));
}

Cell.prototype.reveal = function() {
	this.revealed = true;
	if(this.neighbourCount == 0)
	{
		this.floodFill();
	}
}

Cell.prototype.countNeighbours = function(){
	var count = 0;

	if(this.mine) {
		return -1;
	}

	for(var i = -1; i < 2; i++){
		for(var j = -1; j < 2; j++){
			var xPos = this.i + i;
			var yPos = this.j + j;
			if(xPos > -1 && xPos < cols && yPos > -1 && yPos < rows)
			{
				if(grid[xPos][yPos].mine){
					count++;
				}
			}
		}
	}

	this.neighbourCount = count;
}

Cell.prototype.floodFill = function(){

	if(this.mine) {
		return -1;
	}

	for(var i = -1; i < 2; i++){
		for(var j = -1; j < 2; j++){
			var xPos = this.i + i;
			var yPos = this.j + j;

			if(xPos > -1 && xPos < cols && yPos > -1 && yPos < rows)
			{
				if(!grid[xPos][yPos].mine && !grid[xPos][yPos].revealed){
					grid[xPos][yPos].reveal();
				}
			}
		}
	}
}