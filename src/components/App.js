import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux';
import Dashboard from './Dashboard'
import '../App.css';
import posts from '../reducers/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        {this.props.loading === true
        ? null
        : <Dashboard></Dashboard>}
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
function mapStateToProps ({ posts }) {
  return{
    loading: posts === null
  }
}
export default connect(mapStateToProps)(App)