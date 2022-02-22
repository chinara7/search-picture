import React, { Component } from 'react';
import Search from './components/Search';
import Theme from './components/Theme';
import { Container } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import DarkMode from './components/DarkMode'


const cursor = document.getElementById("cursor")
const cursor1 = document.getElementById("cursor1")


document.addEventListener('mousemove', (e) => {
  var x = e.pageX
  var y = e.pageY

  cursor.style.left = x + "px"
  cursor.style.top = y + "px"

  cursor1.style.left = x + "px"
  cursor1.style.top = y + "px"
})

class App extends Component {

  render() {
    return (
      <Container >
        <DarkMode />
        <Theme />
        <Search />
      </Container>
    )
  }
}

export default App
