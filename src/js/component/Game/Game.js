import classes from "./Game.module.css";
import Square from "../Square/Square";
import {useState} from "react";
import Board from "../Board/Board";
import {calculateWinner} from "../../calculateWinner";

const Game = (props) => {
    const [nextPlayer, setNextPlayer] = useState('x');
    const [board, setBoard] = useState(Array(9).fill(null))
    const winner = calculateWinner(board);
    const setSquare = (indexSquare) =>{
        const boardCopy = [...board];
        if (boardCopy[indexSquare] == null && !winner) {
            boardCopy[indexSquare] = nextPlayer;
            setBoard(boardCopy);
            nextPlayer === 'x' ? setNextPlayer('o') : setNextPlayer('x');
        }
    }
    const resetGame = () =>{
        debugger
        let boardCopy = [...board];
        setBoard(boardCopy.fill(null));
        setNextPlayer('x');
        return boardCopy;
    }

    return (<div>
            <div className={classes.flex}>
                <div className={classes.activePlayer}>Ходит {nextPlayer}</div>
                <div className={classes.reset}><button onClick={resetGame}>Перезапустить игру</button> </div>
            </div>
            <Board board={board} setSquare={setSquare} />
            <div className={classes.winner}>{winner ? `Победитель ${winner}!` : null}</div>

        </div>
    )
};

export default Game;