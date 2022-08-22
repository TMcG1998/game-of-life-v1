// Constants to determine the state of a cell.
const ALIVE = "ALIVE";
const DEAD = "DEAD";
// This board will be a 2D array. Each array will represent a row.
const ARRAY_STILL_BOARD = [
  [DEAD, DEAD, DEAD, DEAD],
  [DEAD, ALIVE, ALIVE, DEAD],
  [DEAD, ALIVE, ALIVE, DEAD],
  [DEAD, DEAD, DEAD, DEAD]
];

const ARRAY_OSC_BOARD = [
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, ALIVE, ALIVE, ALIVE, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD]
]
  
  /* 
    Function to check each cell based on the rules:
    > Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    > Any live cell with two or three live neighbours lives on to the next generation.
    > Any live cell with more than three live neighbours dies, as if by overpopulation.
    > Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  */
  function checkCell(row, column, board) {
    // This variable tells us how many neighbors are alive
    var neighbors = 0;
    // Constants to keep from constantly repeating and avoid potential small errors.
    const ROW_ABOVE = row - 1;
    const ROW_BELOW = row + 1;
    const COLUMN_LEFT = column - 1;
    const COLUMN_RIGHT = column + 1;
    
    // Check row above, checking this isn't the first row.
    if(row > 0) {
      // Check top left diagonal, checking if there is a column to the left
      if (column > 0 && board[ROW_ABOVE][COLUMN_LEFT] === ALIVE) {
        neighbors += 1
      }
      // Check directly above
      if (board[ROW_ABOVE][column] === ALIVE) {
        neighbors+= 1
      }
      // Check top right diagonal, checking if there is a column to the right
      if (column < board[row].length - 1 && board[ROW_ABOVE][COLUMN_RIGHT] === ALIVE) {
        neighbors+= 1
      }
    }
  
    // Check the same row
    // Check cell to the left if there is a column
    if(column > 0 && board[row][COLUMN_LEFT] === ALIVE) {
        neighbors+= 1
    }
    // Check cell to the right if there is a column
    if(column < board[row].length - 1 && board[row][COLUMN_RIGHT] === ALIVE) {
        neighbors += 1
    }
  
    // Check the row below, check this isn't the last row
    if(row < board.length - 1) {
      // Check bottom left diagonal, checking if there is a column to the left
      if(column > 0 && board[ROW_BELOW][COLUMN_LEFT] === ALIVE) {
        neighbors += 1
        }
      // Check directly below
      if(board[ROW_BELOW][column] === ALIVE) {
        neighbors += 1
        }
      // Check bottom right diagonal, checking if there is a column to the right
      if(column < board[row].length - 1 && board[ROW_BELOW][COLUMN_RIGHT] === ALIVE) {
        neighbors += 1
        }
    }
  
    // If our current cell is alive, do a check on whether it lives, or dies
    if(board[row][column] === ALIVE) {
      // If the cell has less than 2 or more than 3 neighbors, it dies.
      if(neighbors < 2 || neighbors > 3) {
        return DEAD
      }
      // If it didn't return dead, return alive.
      return ALIVE;
    }
    // If our current cell is dead, check to see if it comes alive
    if(board[row][column] === DEAD) {
      if(neighbors === 3) {
        return ALIVE;
    } else {
        // If not 3 neighbors, it's dead
        return DEAD;
    }
    
    }
    
  }
  
  // Implement the Game of Life here to transform the inputBoard into the outputBoard!
  function getNextGeneration(inputBoard) {
    const outputBoard = [];
    
    // This first for loop will be iterating each row of the board. 
    for(let i = 0; i < inputBoard.length; i++) {
      // This inner for loops will be iterating over each column inside of the current row.
      for(let j = 0; j < inputBoard[i].length; j++) {
        // Check whether the cell lives or dies.
        const NEW_CELL = checkCell(i, j, inputBoard);
        // Set the current position to equal the updated state of the cell.
        if (j === 0) outputBoard[i] = []
        outputBoard[i].push(NEW_CELL);
      }
    }
    return outputBoard;
  }

  module.exports = {getNextGeneration, checkCell};