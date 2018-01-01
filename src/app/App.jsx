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
      <Route exact path="/home" component={HomeComponent}/>
      <Route exact path="/about" component={AboutComponent}/>
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
