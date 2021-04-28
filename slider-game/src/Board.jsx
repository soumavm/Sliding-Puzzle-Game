import React, { Component } from 'react';
//import Tile from "./Tile"

class Board extends Component{
    constructor() {
        super();
        this.state = {
            gameBoard: []
        }
        this.createBoard = this.createBoard.bind(this)
        this.displayBoard = this.displayBoard.bind(this)
        this.updateBoard = this.updateBoard.bind(this)
    }

    createBoard() {
        let tempBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        //randomly sorts array
        tempBoard= tempBoard.sort(() => Math.random() - 0.5)

        this.setState({
                gameBoard: tempBoard
        })
    }

    componentDidMount() {
        this.createBoard()
    }

    updateBoard(val){
        const index = this.state.gameBoard.findIndex(element => element == val);
        let newBoard = this.state.gameBoard
        newBoard[index] = -5
        
        this.setState({
            gameBoard: newBoard
    })

    }

    displayBoard(){
        return(
            <div>
                <p>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(0, 1))}>
                        {this.state.gameBoard.slice(0, 1)}
                    </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(1, 2))}>
                        {this.state.gameBoard.slice(1, 2)}
                    </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(2, 3))}>
                        {this.state.gameBoard.slice(2, 3)}
                    </button>
                </p>
                <p>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(3, 4))}>
                        {this.state.gameBoard.slice(3, 4)}
                        </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(4, 5))}>
                        {this.state.gameBoard.slice(4, 5)}
                        </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(5, 6))}>
                        {this.state.gameBoard.slice(5, 6)}
                        </button>
                </p>
                <p>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(6, 7))}>
                        {this.state.gameBoard.slice(6, 7)}
                        </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(7, 8))}>
                        {this.state.gameBoard.slice(7, 8)}
                        </button>
                    <button onClick={() => this.updateBoard(this.state.gameBoard.slice(8, 9))}>
                        {this.state.gameBoard.slice(8, 9)}
                        </button>
                </p>
            </div>
        )
    }

    render() { 
        return (
        <div>
            <this.displayBoard />
        </div>
        );
    }
}

export default Board;