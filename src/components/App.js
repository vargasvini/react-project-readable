import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux';
import '../App.css';
import posts from '../reducers/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
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


// // export default connect({getPosts: postsAPI})(App)
// function mapStateToProps ({tete}) {
//   return {
//     //loading: authedUser === null
    
//   }
// }
const mapStateToProps = ({ posts }) => ({ posts });
export default connect(mapStateToProps)(App)