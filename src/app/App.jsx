/**
 * @overview Our main app layout.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import Navigation from './Navigation';
import HomeComponent from './home/Home';
import AboutComponent from './about/About';


const App = () => (
  <div>
    <Navigation/>
    <div className='mx-3'>
      <Switch>
        <Route path="/home" component={HomeComponent}/>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/" component={HomeComponent}/>
      </Switch>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
