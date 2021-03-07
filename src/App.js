import React from 'react';
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
import { openSendMessage,closeSendMessage } from "./redux/action/mailSliceAction";

function App(props) {
  return (
    <Router>
      <div className='app'>
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
    </Router>
    
  );
}

const mapStateToProps = state => {
  return {
    mailSender: state.mailSlice.sendMessageIsOpen
  }
}

export default connect(mapStateToProps,undefined)( App);
