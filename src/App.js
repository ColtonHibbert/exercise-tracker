import React, { Component } from 'react';
import './App.css';
import HomeHeader from './components/homeheader/HomeHeader.js';
import Nav from './components/nav/Nav.js';
import SignForm from './components/signform/SignForm.js';
import Title from './components/title/Title.js';
import HomeCenter from './components/homecenter/HomeCenter.js';
import SideContent from './components/sidecontent/SideContent.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="vh-100 bg-orange">
        <HomeHeader>
          <Nav>
            <SignForm />
          </Nav>
          <Title />
        </HomeHeader>
        <HomeCenter>
          <SideContent>
          </SideContent>
        </HomeCenter>
      </div>
    )
  }
}

export default App;
