import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllQuestions from './pages/AllQuestions';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/allquestions" component={ AllQuestions } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
