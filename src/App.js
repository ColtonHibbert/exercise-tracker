import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';
import Nav from './Nav.js';
import SignForm from './SignForm.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Home>
          <Nav>
            <SignForm />
           </Nav>
        </Home>
      </div>
    );
  }
}

export default App;
