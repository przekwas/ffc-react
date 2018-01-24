import React, { Component } from 'react';
import BattleScene from './BattleScene';
import Battleground from './Battleground';
import Interface from './Interface';

class App extends Component {
  render() {
    return (
      <div className="container">
      <BattleScene />
      <Battleground />
      <Interface />
      </div>
    );
  }
}

export default App;
