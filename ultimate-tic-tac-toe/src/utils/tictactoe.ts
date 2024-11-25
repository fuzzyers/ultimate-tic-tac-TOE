

export const place = (setBoard: any, turn: string, setTurn:any, rowIndex:number, cellIndex:number, board:any) => {

    const piece = turn === "p1" ? "x" : "o"

    if (board[rowIndex][cellIndex] !== ""){
        return
    }

    setBoard((prevBoard: any) => {
        const newBoard = [...prevBoard]

        const updatedRow = [...newBoard[rowIndex]]

        updatedRow[cellIndex] = piece

        newBoard[rowIndex] = updatedRow;

        return newBoard

    })

    setTurn(turn === "p1" ? "p2" : "p1")
}

export const checkWin = () => {
    
}