import { useState } from "react";
import Tictactoe from "./tictactoe/Tictactoe";
function Gameboard() {
    const [degree, setDegree] = useState(0);
    const [winner, setWinner] = useState<string | undefined>(undefined);
    const [turn, setTurn] = useState("X");
    
    function changeTurn(){
        if(turn === "X"){
            setTurn("O");
        }else{
            setTurn("X");
        }
    }
    
   
    return(
        <>
        <div className="flex h-full w-full flex-col items-center justify-center shadow-gray-950 rounded-md border-0 bg-emerald-700">
            <Tictactoe setParentEntry={setWinner} changeturn={changeTurn} turn={turn} degree={degree} />
            <button className="absolute top-4 right-4  px-4 py-2 rounded" onClick={() => setDegree(degree + 1)}>Increase Degree</button>
        </div>
        </>    )
}

export default Gameboard;