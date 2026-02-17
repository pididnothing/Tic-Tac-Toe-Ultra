import { useState, useEffect } from "react";
import Cell from "./Cell";

function Tictactoe(props:{setParentEntry: (winner: string) => void, changeturn: () => void, turn: string, degree: number, initialDegree?: number}){
    const [board, setBoard] = useState<string[]>(Array(9).fill(""));
    const [winner, setWinner] = useState<string | undefined>(undefined);
    
    const initialDegree = props.initialDegree ?? props.degree;
    
    // Generate color based on current degree level - cycles through different colors
    const getGridColor = () => {
        const colors = [
            'rgb(249, 115, 22)',   // orange-500
            'rgb(34, 197, 94)',    // green-500
        ];
        return colors[props.degree % colors.length];
    };

    function setEntry(mark: string, index: number): void{
        if(board[index] === "" && !winner){
            const newBoard = [...board];
            newBoard[index] = mark;
            setBoard(newBoard);
            props.changeturn();
        }
    }

    function checkWinner(): void {
        for(let i = 0; i < 3; i++){
            if(board[i*3] !== "" && board[i*3] === board[i*3+1] && board[i*3+1] === board[i*3+2]){
                setWinner(board[i*3]);
                props.setParentEntry(board[i*3]);
                return;
            }
            if(board[i] !== "" && board[i] === board[i+3] && board[i+3] === board[i+6]){
                setWinner(board[i]);
                props.setParentEntry(board[i]);
                return;
            }
            if(board[0] !== "" && board[0] === board[4] && board[4] === board[8]){
                setWinner(board[0]);
                props.setParentEntry(board[0]);
                return;
            }
            if(board[2] !== "" && board[2] === board[4] && board[4] === board[6]){
                setWinner(board[2]);
                props.setParentEntry(board[2]);
                return;
            }
        }
    }

    useEffect(() => {
        checkWinner();
    }, [board]);

    if(winner){
        return(
            <div className="relative flex w-full h-full min-w-0 min-h-0 items-center justify-center cursor-pointer border border-lime-500 overflow-hidden rounded-md">
                <h1 
                    className="absolute font-bold leading-none whitespace-nowrap" 
                    style={{ fontSize: `${Math.max(1, 9 / Math.pow(3, initialDegree-1))}rem` }}
                >
                    {winner}
                </h1>
            </div>
        )
    }
    return(
        <div 
            className="grid grid-cols-3 w-full h-full aspect-square max-w-full max-h-full p-1 rounded-md"
            style={{ 
                gap: '5px',
                backgroundColor: getGridColor()
            }}
        >
            {board.map((value, index) => (
                <Cell key={index} index={index} changeTurn={props.changeturn} setParentEntry={setEntry} degree={props.degree} turn={props.turn} initialDegree={initialDegree} />
            ))}
        </div>
    )

}

export default Tictactoe;