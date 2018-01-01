/**
 * @overview Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.8/introduction}
 */

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import {BrowserRouter} from 'react-router-dom';

import App from './app/App';

describe('App test suite', function() {
  let component;
  beforeEach(function() {
    component = ReactTestUtils.renderIntoDocument(<BrowserRouter>< App /></BrowserRouter>);
  });

  it('contains spec that returns true', function() {
    expect(true).toBe(true);
  });
});
