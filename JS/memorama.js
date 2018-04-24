var config; //Game config
var cardContainer;
var board = [];//Board info


//Matrix generator of size(rows,cols) with duplicated numbers
function generateNumbers(rows, cols){
	var totalNumbers = (rows*cols)/2;
	var result = [];
	for (var i = 0; i < rows; i++) {
		result[i] = [];
		for (var j = 0; i < cols; j+=2) {
			//generating random numbers
			var aux = randomNumber(1,100);
			result[i][j] = aux;
			result[i][j+1] = aux;
		}
	}
	return result;
}
//Mix the random numbers matrix
function mixNumbers (matrix){
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; i < matrix.length; j++) {
			//new random pos
			newRow = randomNumber(0,matrix.length);
			newCol = randomNumber(0,matrix[i].length);
			//Save original number in temp
			var currentNumber = matrix[i][j];
			//Interchange numbers
			matrix[i][j] = matrix[newRow][newCol];
			matrix[newRow][newCol] = currentNumber; 

		}
	}
	return matrix;
}


//load the board
function loadGame(data){
	config = data;
	//generate board game
	for (var i = 0; i < 4; i++) {
		board[i] = [];
		for (var j = 0; j < 4; j++) {
			//Build Card and push it to container
			var card = buildCard(i,j);
			cardContainer.appendChild(card);
			board[i][j] = card;	
		}
		var newLine  = document.createElement("br");
		cardContainer.appendChild(newLine);
	}
	//Necesitamos obtener el parametro del archivo de config.JSON**
	var numbersMatrix = generateNumbers(4,4);
	//numbersMatrix = mixNumbers(numbersMatrix);
}
function buildCard(row,col){
	//generate div for cards
	var card = document.createElement("div");
	//create card id
	card.id = row + "_" + col;
	//create card class name
	card.className = "card";
	var valueContainer = document.createElement("span");
	card.appendChild(valueContainer);
	return card;
}





function documentLoaded(){
	cardContainer = document.getElementById("memorama");
	getJsonFile("./config/config.json", loadGame);
}
