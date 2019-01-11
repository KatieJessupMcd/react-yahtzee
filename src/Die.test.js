import React from 'react';
import ReactDOM from 'react-dom';
import Die from './Die';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', function() {
  shallow(<Die />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Die />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
