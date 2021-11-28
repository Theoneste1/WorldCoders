function solution(board, word) {
    let count = 0;
     for (let i = 0; i < board.length; i++) {
   
       for (let j = 0; j < board[i].length; j++) {
         const matches = {h: [],v: [],d: [] 
         };
   
         for (let letter = 0; letter < word.length; letter++) {
           if (board[i] && board[i][j + letter]) {
             matches.h.push(board[i][j + letter]);
           }
   
           if (board[i + letter] && board[i + letter][j]) {
             matches.v.push(board[i + letter][j]);
           }
   
           if (board[i + letter] && board[i + letter][j + letter]) {
   
             matches.d.push(board[i + letter][j + letter]);
   
           }
   
         }
         Object.keys(matches).forEach(key => {
           const matchedWord = matches[key].join('') 
           if (matchedWord === word) { 
   
             count++;
   
           }
   
         })
   
       }
   
     }
     return count;
   }