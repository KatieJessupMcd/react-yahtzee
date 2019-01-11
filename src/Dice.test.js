import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import Dice from './Dice';

it('renders without crashing', function() {
  shallow(<Dice dice={[]} />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Dice dice={[]} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
