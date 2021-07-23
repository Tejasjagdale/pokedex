import React from 'react';
import Advsearch from './Advsearch' 
import {Switch,Route,} from "react-router-dom";
import Info from "./Info";
import './App.css';

function App() {
  return (
    <>
       <Switch>
         <Route exact path="/" component={Advsearch} />
         <Route exact path="/info/:id" component={Info}/>
       </Switch>
    </>
  );
}

export default App;
