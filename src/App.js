import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//importing components
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';

function App() {
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
      </div>
    </Router>
    
  );
}

export default App;
