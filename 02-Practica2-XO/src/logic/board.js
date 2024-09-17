import { WINNING_COMBOS } from "../constans"


export const checkWinner  =  (boardToCheck) => {
    for (const combo of WINNING_COMBOS){
      const [a,b,c] = combo
      if (boardToCheck[a] && 
         boardToCheck[a] === boardToCheck[b] && 
         boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a]
         }
    } 
    return null
  }

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every(square => square !== null)
  }