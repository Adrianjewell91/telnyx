/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {Router, withRouter, browserHistory} from 'react-router';

import App from './app/App';

describe('App test suite', function() {
  let component;
  //this isn't working right now with the react router 4, so I'll leave it off for right now.
  // let WrappedApp = withRouter(App);
  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(<Router history={browserHistory}>< App /></Router>);
  });

  it('contains spec that returns true', function() {
    expect(true).toBe(true);
  });
});
