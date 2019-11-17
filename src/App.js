import React, { Component } from 'react';
import Card from './components/cards/cards';
import CardDeck from './CardDeck';
import PokerHand from './pokerHand';

export default class App extends Component {
  state = {
    cards: [],
    combination: '',
    quantityCard: '',
    cardsChangeList: []
  };
  deck = new CardDeck();

  constructor(props) {
    super(props);
    const newDeck = this.deck.getCards(5)
    const comb = [...newDeck];
    this.state.cards = newDeck;
    this.state.combination = PokerHand(comb);
    this.state.quantityCard = this.deck.quantityCard();
  }

  newDeck = () => {
    const cards = this.deck.getCards(5);
    const comb = [...cards];
    this.setState({ cards, combination: PokerHand(comb), quantityCard: this.deck.quantityCard() });
  }

  changeCard = () => {
    const arr = this.state.cardsChangeList;
    const newDeck = this.deck.getCards(arr.length);
    let cards = this.state.cards;
    cards = cards.filter((el) => {
      return !arr.includes(el);
    })
    cards.unshift(...newDeck)
    const comb = [...cards];
    this.setState({ cards, cardsChangeList: [], quantityCard: this.deck.quantityCard(), combination: PokerHand(comb) })
  }

  pickCard = (id) => {
    const item = this.state.cards;
    item.forEach(el => {
      if (el.id === id) {
        if (!el.pick) {
          el.pick = !el.pick;
          this.setState(prevState => { return prevState.cardsChangeList.push(el) })
        } else {
          const index = this.state.cardsChangeList.findIndex(p => p.id === id);
          el.pick = !el.pick;
          this.setState(prevState => { return prevState.cardsChangeList.splice(index, 1) })
        }
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="playingCards faceImages card-inner">
          {this.state.cards.map((item) => {
            return <Card key={item.id} pick={item.pick} suit={item.suit} rank={item.rank} pickCard={(id) => this.pickCard(item.id)} />
          })}
          <br />
          {this.state.quantityCard ?
            [<button key="bp1" onClick={this.newDeck}>next card</button>,
            <button key="bp2" onClick={this.changeCard}>change cards</button>]
            :
            <button>next card</button>
          }
          <div className='combination'>
            <span>{this.state.combination}</span>
            <br />
            <span>Cards quantity: {this.state.quantityCard}</span>
          </div>
        </div>
      </div>
    )
  }
}
