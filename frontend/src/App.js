import React from 'react';
import './App.css';
import Add from './js/Add';
import List from './js/List';
import DayEdit from './js/DayEdit';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Route exact={true} path='/add' render={() => (
            <div className="App">
              <Add/>
            </div>
          )}/>
          <Route exact={true} path='/' render={() => (
            <div class="listHeading row">
              <div class="listHeadItem col-1">day</div>
              <div class="listHeadItem col-2">date</div>
              <div class="listHeadItem col-5">link</div>
              <div class="listHeadItem col-1">topics</div>
              <div class="listHeadItem col-1">abhi</div>
              <div class="listHeadItem col-1">sita</div>
              <div class="listHeadItem col-1">harsha</div>
            </div>
          )}/>
          
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <List />
            </div>
          )}/>
          <Route exact={true} path='/day/:num' render={() => (
            <div class="listHeading row">
              <div class="listHeadItem col-3">day</div>
              <div class="listHeadItem col-3">sub_topic</div>
              <div class="listHeadItem col-2">abhi</div>
              <div class="listHeadItem col-2">sita</div>
              <div class="listHeadItem col-2">harsha</div>
            </div>
          )}/>
          <Route exact={true} path='/day/:num' render={() => (
            <div className="App">
              <DayEdit />
            </div>
          )}/>


          <Route exact={true} path='/nav' render={() => (
            <div className="App">
              <div className="App">
      <header className="App-header">
      <h1>J3 INTERVIEW_BIT</h1>
      <h2>WELCOME</h2>
        <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
        >
          list all user
        </a>
        <a
          className="App-link"
          href="/add"
          rel="noopener noreferrer"
        >
          add new day
        </a>
      </header>
    </div>
            </div>
          )}/>
          
        </div>
    
      </BrowserRouter>
  );
}

export default App;
