var cols;
var rows;
var w = 30;
var grid;
var totalMine = 25;

function make2DArray(cols, rows)
{
  var arr = new Array(cols);
  for(var i = 0; i < arr.length; i++)
  {
    arr[i] = new Array(rows);
  }

  return arr;
}

function gameOver(){
  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].revealed = true;
    }
  }
}

function mousePressed() {
  for(var i = 0; i < cols; i++){
  	for(var j = 0; j < rows; j++){
  		if(grid[i][j].contain(mouseX, mouseY)){
  			grid[i][j].reveal();
        if(grid[i][j].mine){
          gameOver();
        }
  		}
  	}
  }
}

function setup() {
  createCanvas(301, 301);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  
  /*
   * Create Cells.
   */
  for(var i = 0; i < cols; i++){
  	for(var j = 0; j < rows; j++){
  		grid[i][j] = new Cell(i, j, w);
  	}
  }

  /*
   * Select the mine position.
   */
  for(var n = 0; n < totalMine; n++){
    var i = floor(random(cols));
    var j = floor(random(rows));
    if(!grid[i][j].mine){
      grid[i][j].mine = true;
    } else{
      n--;
    }
  }

  /*
   * Counter neighbour for every cell.
   */
  for(var i = 0; i < cols; i++){
  	for(var j = 0; j < rows; j++){
  		grid[i][j].countNeighbours();
  	}
  }
}

function draw() {
  for(var i = 0; i < cols; i++){
  	for(var j = 0; j < rows; j++){
  		grid[i][j].show();
  	}
  }
}
