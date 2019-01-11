import React from 'react';
import ReactDOM from 'react-dom';
import ScoreTable from './ScoreTable';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const dummyScores = {
  ones: 1,
  twos: 1,
  threes: 1,
  fours: 1,
  fives: 1,
  sixes: 1,
  threeOfKind: 1,
  fourOfKind: 1,
  fullHouse: 1,
  smallStraight: 1,
  largeStraight: 1,
  yahtzee: 1,
  chance: 1
};

it('renders without crashing', function() {
  shallow(<ScoreTable scores={dummyScores} />);
});

// snapshot test
it('matches snapshot', function() {
  let wrapper = shallow(<ScoreTable scores={dummyScores} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
