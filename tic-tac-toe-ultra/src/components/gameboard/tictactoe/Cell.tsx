import { useState } from "react";
import Tictactoe from "./Tictactoe";

function Cell(props:{index: number, changeTurn: () => void, setParentEntry: (mark: string, index: number) => void, degree: number, turn: string, initialDegree?: number}){
    const [mark, setMark] = useState("");
    const initialDegree = props.initialDegree ?? props.degree;

    function setEntry(newMark: string): void{
        if(mark === ""){
            setMark(newMark);
            props.setParentEntry(newMark, props.index);
            props.changeTurn();
        }
    }

    function handleClick(): void {
        setEntry(props.turn);
    }

    if(props.degree === 0){
        return(
            <div className="relative flex w-full h-full min-w-0 min-h-0 items-center justify-center cursor-pointer border-0 shadow-md overflow-hidden rounded-md" onClick={handleClick}>
                <h1 
                    className="absolute font-bold leading-none whitespace-nowrap" 
                    style={{ fontSize: `${Math.max(0.5, 3 / Math.pow(3, initialDegree))}rem` }}
                >
                    {mark}
                </h1>
            </div>
        )
    }

    return(
        <div className="w-full h-full min-w-0 min-h-0 overflow-hidden rounded-md">
            <Tictactoe setParentEntry={setEntry} changeturn={props.changeTurn} turn={props.turn} degree={props.degree - 1} initialDegree={initialDegree} />
        </div>
    )
}

export default Cell;