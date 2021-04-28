//If I had more time, I would probably use a different data structure, like a graph
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class Board extends Component{
    constructor() {
        super();
        this.state = {
            gameBoard: [],
            message: ""
        }
        this.createBoard = this.createBoard.bind(this)
        this.displayBoard = this.displayBoard.bind(this)
        this.updateBoard = this.updateBoard.bind(this)
        this.checkWin = this.checkWin.bind(this)
    }

    createBoard() {
        let tempBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        //randomly sorts array
        tempBoard= tempBoard.sort(() => Math.random() - 0.5)
        //sets game board to sorted array
        this.setState({
                gameBoard: tempBoard
        })
    }

    //creates game board on start
    componentDidMount() {
        this.createBoard()
    }

    //checks if the board is winning
    checkWin(){
        let winBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0]
        if(this.state.gameBoard === winBoard)
        this.setState({
            message: "You win!"
    })
    }

    //updates the board on player click
    updateBoard(val){
        //finds the index the player clicked on
        const index = this.state.gameBoard.findIndex(element => element == val);
        let newBoard = this.state.gameBoard
        //depending on which index the user clicked, the game logic will be different, preforms a swap between the "empty" (0) tile and the number clicked
        //I ran out of time but I realized there is a logic bug, where you can swap element [3] and [4] (among others) even though they aren't adjacent
        if(index < 3){
            if(newBoard[index + 3]===0 || newBoard[index + 1]===0 || newBoard[index-1]===0){
                const newIndex = this.state.gameBoard.findIndex(element => element == 0)
                newBoard[index] = 0
                newBoard[newIndex] = val

                this.setState({
                    message: "You Moved"
            })
            }
            else{
                this.setState({
                    message: "Invalid Move"
            })
            }
        }

        else if(index < 6){
            if(newBoard[index + 3]===0 || newBoard[index + 1]===0 || newBoard[index-1]===0 || newBoard[index-3]===0 ){
                const newIndex = this.state.gameBoard.findIndex(element => element == 0)
                newBoard[index] = 0
                newBoard[newIndex] = val
                this.setState({
                    message: "You Moved"
            })
            }
            else{
                this.setState({
                    message: "Invalid Move"
            })
            }
        }

        else{
            if(newBoard[index - 3]===0 || newBoard[index + 1]===0 || newBoard[index-1]===0){
                const newIndex = this.state.gameBoard.findIndex(element => element == 0)
                newBoard[index] = 0
                newBoard[newIndex] = val

                this.setState({
                    message: "You Moved"
            })
            }
            else{
                this.setState({
                    message: "Invalid Move"
            })
            }
        }

        this.setState({
            gameBoard: newBoard
    })

        this.checkWin()
    }

    //displays the board as a series of buttons within tables elements
    tableElement(index){
        return(
                <td>
                    <Button variant="primary" size="lg" onClick={() => this.updateBoard(this.state.gameBoard[index])}>
                        {this.state.gameBoard[index]}
                    </Button>{' '}
                </td>
        )
    }

    //displays a bunch of table elements
    displayBoard(){
        return(
            <div>
                <table>
                    <tr>
                        {this.tableElement(0)}
                        {this.tableElement(1)}
                        {this.tableElement(2)}
                    </tr>
                    <tr>
                        {this.tableElement(3)}
                        {this.tableElement(4)}
                        {this.tableElement(5)}
                    </tr>
                    <tr>
                        {this.tableElement(6)}
                        {this.tableElement(7)}
                        {this.tableElement(8)}
                    </tr>
                </table>
                <p>{this.state.message}</p>
            </div>
        )
    }

    //renders the app
    render() { 
        return (
        <center>
            <div>
                <h1>React Slider Game</h1>
                <this.displayBoard />
            </div>
        </center>
        );
    }
}

export default Board;