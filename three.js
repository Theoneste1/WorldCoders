const isHorizontalWinner = (currentPlayer, board) => {
    return board.some((moves) => moves.every((move) => move === currentPlayer))
   }
   const transposeBoard = (board) => {
     return board.map((_,index) => board.map((row) => row[index]))
   }
   const isVerticalWinner = (currentPlayer, board) => {
     return transposeBoard(board).some((moves) => moves.every((move) => move === currentPlayer))
   }
   
   const getDiagonalMoves = (board) => {
     const diagonalMoves = [];
     const equalBasedDiagonal = []; 
     const sumBasedDiagonal = [];
     for(let row = 0; row < board.length; row++){
       for (col = 0; col < board.length; col++) {
         if (row === col) {
           equalBasedDiagonal.push(board[row][col])
         }
       }
     }
   
     for(let row = 0; row < board.length; row++){
       for (col = 0; col < board.length; col++) {
         if (row + col === board.length -1 ) {
           sumBasedDiagonal.push(board[row][col])
         }
       }
     }
   
     diagonalMoves.push(equalBasedDiagonal,sumBasedDiagonal);
     return diagonalMoves;
   }
   
   
   const isDiagonalWinner = (currentPlayer,board) => {
     return getDiagonalMoves(board).some((moves) => moves.every((move) => move === currentPlayer))
   
   }
   
   const isWinner = (player,board) => isHorizontalWinner(player,board) || isVerticalWinner(player,board) || isDiagonalWinner(player,board)
   
   const isGameOver = (board) => board.every((row) => row.every((move) => move !== '.'))
   function solution(board) {
       
       board = board.map(el => el.split(''))
     if(isGameOver(board) && !isWinner('X', board) && !isWinner('O', board)) {
       return 'TIE';
     }
     
     if (isWinner('X',board)) {
       return 'X WIN';
     } else if (isWinner('O', board)){
          return 'O WIN';
       
     } else {
         return 'ONGOING';
     }
   }