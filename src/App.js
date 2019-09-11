import React, { Component } from 'react'
import './App.scss'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Game from './components/tic-tac-toe/game'
import Pixelart from './components/pixelart'
import UserSettings from './components/user-settings'

let Wrapper = styled.section`
  width: 60%;
  margin: 20px auto;
`

class App extends Component {

  render () {
    return (
      <div className="App">
        <Wrapper>
          <Router>
            <Route path="/tic-tac-toe" exact component={Game}/>
            <Route path="/" exact component={Pixelart}/>
            <Route path="/settings" exact component={UserSettings}/>
          </Router>
        </Wrapper>
      </div>

    )
  }
}

export default App
