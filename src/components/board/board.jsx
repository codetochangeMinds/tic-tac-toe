import Button from "../shared/button";
import './styles.css'

export default function Board() {
    return (
        <>
        <div className="board-row">
          <Button value='X'/>
          <Button value='X'/>
          <Button value='X'/>
        </div>
        <div className="board-row">
          <Button value='O'/>
          <Button value='X'/>
          <Button value='O'/>
        </div>
        <div className="board-row">
          <Button value='O'/>
          <Button value='X'/>
          <Button value='O'/>
        </div>
      </>
    );
}