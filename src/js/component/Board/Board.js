import classes from "./Board.module.css";
import Square from "../Square/Square";

const Board = (props) =>{
    return (<div className={classes.board}>
            {props.board.map((value, index)=>  <Square key={index} value={value} setValue={() => props.setSquare(index)}/> )}
        </div>
    )
};

export default Board;