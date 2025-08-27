import './board.css'
import Square from './square'
function Board(){

    return(
        <div className="board">
            <Square position="r1c1"></Square>
            <Square position="r1c2"></Square>
            <Square position="r1c3"></Square>
            <Square position="r2c1" ></Square>
            <Square position="r2c2" ></Square>
            <Square position="r2c3"></Square>
            <Square position="r3c1"></Square>
            <Square position="r3c2" ></Square>
            <Square position="r3c3"></Square>
            
        </div>
    )
}

export default Board