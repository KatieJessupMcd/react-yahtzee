import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Dice from './Dice';
import Die from './Die';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', function() {
  shallow(<Game />);
});
// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<Game />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('should toggle a locked arr value to True on first die button click', function() {
  let wrapper = mount(<Game />);

  expect(wrapper.state().locked[0]).toBe(false);

  const dieButton = wrapper.find(Die).at(0);
  dieButton.simulate('click');
  let wrapperState = wrapper.state();

  expect(wrapperState.locked[0]).toBe(true);
});
