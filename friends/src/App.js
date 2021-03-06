import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchingData, createFriend } from '.actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Friends App!</h1>
          <Friends friends = {this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = (state, action) => ({
  friends: state.rootReducer.friends
});
const mapDispatchToProps = { fetchingData, createFriend };

export default connect(mapStateToProps, mapDispatchToProps)(App);
