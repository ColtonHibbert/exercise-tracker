import React, { Component } from 'react';
import './App.css';
import HomeHeader from './components/homeheader/HomeHeader.js';
import Nav from './components/nav/Nav.js';
import SignForm from './components/signform/SignForm.js';
import Title from './components/title/Title.js';
import HomeCenter from './components/homecenter/HomeCenter.js';
import SideContent from './components/sidecontent/SideContent.js';
import MainContent from './components/maincontent/MainContent.js';
import CreateWorkout from './components/createworkout/CreateWorkout.js';
import CreateWorkoutHeader from './components/createworkoutheader/CreateWorkoutHeader.js';
import CreateWorkoutCenter from './components/createworkoutcenter/CreateWorkoutCenter.js';
import SaveWorkout from './components/saveworkout/SaveWorkout.js';
import Exercises from './components/exercises/Exercises.js';
import ExercisesHeader from './components/exercisesheader/ExercisesHeader.js';
import ExerciseCard from './components/exercisecard/ExerciseCard.js';
import TimedExercises from './components/timedexercises/TimedExercises.js';


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
          <MainContent>
            <CreateWorkout>
              <CreateWorkoutHeader>
                <SaveWorkout />
              </CreateWorkoutHeader>
              <CreateWorkoutCenter>
                <Exercises>
                  <ExercisesHeader />
                  <ExerciseCard />
                </Exercises>
                <TimedExercises>
                </TimedExercises>
              </CreateWorkoutCenter>
            </CreateWorkout>
          </MainContent>
        </HomeCenter>
      </div>
    )
  }
}

export default App;
