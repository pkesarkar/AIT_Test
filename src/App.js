import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import page1 from './components/page1';
import page2 from './components/page2';
import page3 from './components/page3';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Switch>
             <Route path="/" component={page1} exact/>
             <Route path="/page2" component={page2}/>
             <Route path="/page3" component={page3}/>
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
