import React, { Component } from 'react';
import './App.css';

import ChampionCard from './components/championcard/championcard';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      mainAlly: {
        name: 'Kennen',
        lv: 1,
        hp: 541,
        lvHp: 84,
        armor: 29,
        lvArmor: 3.75,
        resist: 30,
        lvResist: 0.5,
        movement: 335,
        mana: 200,
        lvMana: 0,
        attack: 48,
        lvAttack: 3.75,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        ability1: {
          base: [75,115,155,195,235],
          scale: 'ap',
          type: 'damage',
          ratio: 0.75
        },
        ability2: {
          base: [60,85,110,135,160],
          scale: 'ap',
          type: 'damage',
          ratio: 0.75
        },
        ability3: {
          base: [80,120,160,200,240],
          scale: 'ap',
          type: 'damage',
          ratio: 0.8
        },
        ability4: {
          base: [300,562.5,825],
          scale: 'ap',
          type: 'damage',
          ratio: 1.5
        },
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg'
      },
      mainEnemy: {
        name: 'Lux',
        lv: 1,
        hp: 490,
        lvHp: 85,
        armor: 18.72,
        lvArmor: 4,
        resist: 30,
        lvResist: 0.5,
        movement: 330,
        mana: 480,
        lvMana: 23.5,
        attack: 53.54,
        lvAttack: 3.3,
        ap: 0,
        abilitylv1: 0,
        abilitylv2: 0,
        abilitylv3: 0,
        abilitylv4: 0,
        ability1: {
          base: [80,125,170,215,260],
          scale: 'ap',
          type: 'damage',
          ratio: 0.6
        },
        ability2: {
          base: [90,130,170,210,250],
          scale: 'ap',
          type: 'shield',
          ratio: 0.7
        },
        ability3: {
          base: [60,105,150,195,240],
          scale: 'ap',
          type: 'damage',
          ratio: 0.6
        },
        ability4: {
          base: [300,400,500],
          scale: 'ap',
          type: 'damage',
          ratio: 1
        },
        image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'
      }
    }
  }

  render(){
    const { mainAlly, mainEnemy } = this.state;
    console.log(mainAlly)
    return (
      <div className="App">
        <header className="champion-select">
          <div className="allies">
            <ChampionCard champion={mainAlly} />
          </div>
          <div className="enemy">
            <ChampionCard champion={mainEnemy} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
