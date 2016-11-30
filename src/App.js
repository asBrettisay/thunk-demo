import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPeople} from './redux/starWars/reducer.js';
import List from './components/List.js';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getPeople()
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" className="App-logo" alt="logo" />
          <h2>Welcome to Star Wars</h2>
        </div>
        {this.props.loading && <h1>Loading...</h1>}
        <List people={this.props.people} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.starWars.people,
    loading: state.starWars.loading
  }
}

const mapDispatchToProps = {getPeople}

export default connect(mapStateToProps, mapDispatchToProps)(App);
