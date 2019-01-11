import React from 'react';
import ReactDOM from 'react-dom';
import RuleRow from './RuleRow';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  shallow(<RuleRow />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<RuleRow />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
