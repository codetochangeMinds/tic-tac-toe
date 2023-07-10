import { useState } from 'react';
import Button from "../shared/button";
import './styles.css'

export default function Board() {
    const [cells, setcells] = useState(Array(9).fill(null)); 
    const [turn, setTurn] = useState(0)
    
    function handleClick(i) {
      if (cells[i] || calculateWinner(cells)) {
        return;
      }

      const nextcells = cells.slice();
      if (turn === 0) {
        nextcells[i] = 'X';
        setTurn(1);
      } else {
        nextcells[i] = 'O';
        setTurn(0)
      }
      
      setcells(nextcells);
    }

    const winner = calculateWinner(cells);
    console.log("Winner is:", winner)

    return (
        <>
        <div className="board-row">
          <Button value={cells[0]} onClick={() => handleClick(0)}/>
          <Button value={cells[1]} onClick={() => handleClick(1)}/>
          <Button value={cells[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Button value={cells[3]} onClick={() => handleClick(3)}/>
          <Button value={cells[4]} onClick={() => handleClick(4)}/>
          <Button value={cells[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Button value={cells[6]} onClick={() => handleClick(6)}/>
          <Button value={cells[7]} onClick={() => handleClick(7)}/>
          <Button value={cells[8]} onClick={() => handleClick(8)}/>
        </div>
      </>
    );
}

function calculateWinner(cells) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}