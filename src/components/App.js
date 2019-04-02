import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading'
import { showLoading, hideLoading } from 'react-redux-loading'
import '../App.css';

class App extends Component {
  componentDidMount() {
    showLoading()
    hideLoading()
  }
  render() {
    return (
      <Fragment>
        <LoadingBar/>
        <div className="App">
          TESTE
        </div>
      </Fragment>
    );
  }
}

export default App;
