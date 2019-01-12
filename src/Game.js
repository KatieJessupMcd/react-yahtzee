import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import './Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      disabled: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    // BUG - this was not bound before
    this.toggleLocked = this.toggleLocked.bind(this);
    this.disableScoreRow = this.disableScoreRow.bind(this);
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      disabled: st.rollsLeft > 1 ? false : true,
      rollsLeft: st.rollsLeft - 1
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.disableScoreRow(rulename);
    this.roll();
  }

  disableScoreRow(name) {
    console.log(this.state);
    this.setState({
      disabled: true
    });
  }

  render() {
    return (
      <section>
        <Dice
          dice={this.state.dice}
          locked={this.state.locked}
          handleClick={this.toggleLocked}
          // disabled is going to have a TRUE OR FALSE;
          disabled={this.state.disabled}
        />
        <button
          className="Game-reroll"
          disabled={this.state.locked.every(x => x)}
          onClick={this.roll}
        >
          {this.state.rollsLeft} Rerolls Left
        </button>
        <ScoreTable
          // disabled={this.state.disabled}
          doScore={this.doScore}
          scores={this.state.scores}
        />
      </section>
    );
  }
}

export default Game;
