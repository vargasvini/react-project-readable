import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import '../App.css';

class App extends Component {
  componentDidMount() {
    handleInitialData()
  }
  render() {
    return (
      <Fragment>
        <LoadingBar/>
        <div className="App">
          TESTE
        </div>
      </Fragment>
    )
  }
}


export default App