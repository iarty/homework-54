import React, { Component } from 'react';
import Card from './components/cards/cards';
import CardDeck from './CardDeck'

export default class App extends Component {
  state = {
    cards: []
  };

  constructor(props) {
    super(props);
    const deck = new CardDeck();
    this.state.cards = deck.getCards(5);
  }

  newDack = () => {
    // Будет менять карты в state
  }

  render() {
    return (
      <div className="container">
        <div className="playingCards faceImages card-inner">
          <Card suit='D' rank="K" />
          <Card suit='C' rank="2" />
          <Card suit='S' rank="5" />
          <Card suit='H' rank="J" />
          <Card suit='D' rank="A" />
        </div>
      </div>
    )
  }
}
