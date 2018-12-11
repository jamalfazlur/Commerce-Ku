import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Cookie from 'universal-cookie';

import { keepLogin, cookieChecked } from './actions';
import HeaderKu from './components/HeaderKu';
import LoginKu from './components/LoginKu';
import HomeKu from './components/HomeKu';
import RegisterKu from './components/RegisterKu';

const cookies = new Cookie();

class App extends Component {

  componentDidMount() {
      const username = cookies.get('myPengguna');
      if(username !== undefined){
        this.props.keepLogin(username);
      } else {
        this.props.cookieChecked();
      }
  }

  render() {
    return (
      <div className="App">
        <HeaderKu />
        <div className="container">
          <Route exact path="/" component={HomeKu} />
          <Route path="/login" component={LoginKu} />
          <Route path="/register" component={RegisterKu} />
        </div>
        
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cookie: state.auth.cookie }
}

export default withRouter(connect(mapStateToProps, {keepLogin, cookieChecked})(App));
