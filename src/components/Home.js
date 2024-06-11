
import React, { Component } from 'react'

 class Home extends Component {


  constructor(){
    super()
    this.state = {counter:0,name:'hello world'}
    //setState
    this.increment =  this.increment.bind(this)
  }

  increment(){
    let a = this.state.counter
    a++
    this.setState({counter:a})
  }
  //function
  //state
  //events

  render() {

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    )
  }
}

export default Home
