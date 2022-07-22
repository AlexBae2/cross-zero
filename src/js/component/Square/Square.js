import classes from "./Square.module.css";
import {useState} from "react";

const Square = (props) =>{
    return (
        <>
            <button className={classes.square} onClick={props.setValue}>{props.value}</button>
        </>
    )
};

export default Square;