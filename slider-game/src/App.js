import React, {Component} from "react"
import Board from "./Board"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(){
    super()
}

  render(){
    return(
      <div>
        <Board />
      </div>
    )
  }
}

export default App;
