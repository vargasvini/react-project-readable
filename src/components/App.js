import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

import MainPage from '../components/MainPage';
import PostList from '../components/PostList';
import { categoriesAPI } from '../actions/category';
import { postsAPI } from '../actions/post';

class App extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="App">
        <MainPage />
        <Switch>
          <Route exact path="/" component={PostList} />
          {/* <Route exact path="/" component={PostForm} /> */}
          <Route exact path="/category/:category" component={PostList} />
          {/* <Route path="/category/:category/:postId" component={PostDetails} /> */}
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func,

};

export default withRouter(
  connect(null, {
    getCategories: categoriesAPI,
    getPosts: postsAPI
  })(App)
);


