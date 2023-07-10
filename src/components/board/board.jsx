import { useState } from 'react';
import Button from "../shared/button";
import './styles.css'

export default function Board() {
    const [cells, setcells] = useState(Array(9).fill(null)); 
    const [turn, setTurn] = useState(0)
    
    function handleClick(i) {
      if (cells[i]) {
        return;
      }

      const nextSquares = cells.slice();
      if (turn === 0) {
        nextSquares[i] = 'X';
        setTurn(1);
      } else {
        nextSquares[i] = 'O';
        setTurn(0)
      }
      
      setcells(nextSquares);
    }

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