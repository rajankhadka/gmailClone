import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

//importing components
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';

//redux
import {connect} from 'react-redux'
import { login,logout } from "./redux/action/userSliceAction";
import Login from './components/Login/Login';

import { auth } from "./firebase";

function App(props) {
  console.log("App.js", props.userSlice);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        props.loginAction({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        });
      }
    });
  });

  return (
    <Router>
      {
        !props.userSlice
          ? <Login />
          : <div className='app'>
              <Header />
              <div className="app__body">
                <SideBar />
                <Switch>
                  <Route path='/mail' component={Mail} />
                  <Route path="/" component={EmailList} />
                </Switch>
              </div>
              {props.mailSender && <SendMail />}
            </div>
          
      }

      
    </Router>
    
  );
}

const mapStateToProps = state => {
  return {
    mailSender: state.mailSlice.sendMessageIsOpen,
    userSlice: state.userSliceReducers.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (data) => dispatch(login(data)),
    logoutAction: () => dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)( App);
