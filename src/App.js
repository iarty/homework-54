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

  constructor() {
    super();
    const newDeck = this.deck.getCards(5)
    // const newDeck = [
      //Royal flush
      // { id: "1a", rank: "A", suit: "H", priorRank: 12 },
      // { id: "2s", rank: "Q", suit: "H", priorRank: 10 },
      // { id: "3d", rank: "K", suit: "H", priorRank: 11 },
      // { id: "4f", rank: "10", suit: "H", priorRank: 8 },
      // { id: "5c", rank: "J", suit: "H", priorRank: 9 }

      //straight flush
      // { id: "1a", rank: "9", suit: "H", priorRank: 7 },
      // { id: "2s", rank: "7", suit: "H", priorRank: 5 },
      // { id: "3d", rank: "8", suit: "H", priorRank: 6 },
      // { id: "4f", rank: "5", suit: "H", priorRank: 3 },
      // { id: "5c", rank: "6", suit: "H", priorRank: 4 }

      //four of a kind
      // { id: "1a", rank: "3", suit: "D", priorRank: 1 },
      // { id: "2s", rank: "3", suit: "H", priorRank: 1 },
      // { id: "3d", rank: "2", suit: "S", priorRank: 0 },
      // { id: "4f", rank: "3", suit: "H", priorRank: 1 },
      // { id: "5c", rank: "3", suit: "C", priorRank: 1 }

      //full house
      // { id: "1a", rank: "10", suit: "D", priorRank: 8 },
      // { id: "2s", rank: "10", suit: "H", priorRank: 8 },
      // { id: "3d", rank: "10", suit: "S", priorRank: 8 },
      // { id: "4f", rank: "8", suit: "H", priorRank: 6 },
      // { id: "5c", rank: "8", suit: "C", priorRank: 6 }

      //flush
      // { id: "1a", rank: "K", suit: "C", priorRank: 11 },
      // { id: "2s", rank: "J", suit: "C", priorRank: 9 },
      // { id: "3d", rank: "8", suit: "C", priorRank: 6 },
      // { id: "4f", rank: "4", suit: "C", priorRank: 2 },
      // { id: "5c", rank: "3", suit: "C", priorRank: 1 }

      //straight
      // { id: "1a", rank: "5", suit: "H", priorRank: 3 },
      // { id: "2s", rank: "4", suit: "D", priorRank: 2 },
      // { id: "3d", rank: "3", suit: "S", priorRank: 1 },
      // { id: "4f", rank: "2", suit: "H", priorRank: 0 },
      // { id: "5c", rank: "A", suit: "C", priorRank: 12 }

      //three of a kind
      // { id: "1a", rank: "5", suit: "H", priorRank: 3 },
      // { id: "2s", rank: "5", suit: "D", priorRank: 3 },
      // { id: "3d", rank: "5", suit: "S", priorRank: 3 },
      // { id: "4f", rank: "2", suit: "H", priorRank: 0 },
      // { id: "5c", rank: "A", suit: "C", priorRank: 12 }

      //two pairs
      // { id: "1a", rank: "5", suit: "H", priorRank: 3 },
      // { id: "2s", rank: "5", suit: "D", priorRank: 3 },
      // { id: "3d", rank: "4", suit: "S", priorRank: 2 },
      // { id: "4f", rank: "4", suit: "H", priorRank: 2 },
      // { id: "5c", rank: "A", suit: "C", priorRank: 12 }

      //one pair
      // { id: "1a", rank: "5", suit: "H", priorRank: 3 },
      // { id: "2s", rank: "5", suit: "D", priorRank: 3 },
      // { id: "3d", rank: "Q", suit: "S", priorRank: 10 },
      // { id: "4f", rank: "8", suit: "H", priorRank: 6 },
      // { id: "5c", rank: "A", suit: "C", priorRank: 12 }
    // ]
    const comb = [...newDeck];
    // const combin = new PokerHand(newDeck).getOutcome();
    this.state.cards = newDeck;
    this.state.combination = new PokerHand(comb).getOutcome();
    this.state.quantityCard = this.deck.quantityCard();
  }

  newDeck = () => {
    const cards = this.deck.getCards(5);
    const comb = [...cards];
    this.setState({ cards, combination:new PokerHand(comb).getOutcome(), quantityCard: this.deck.quantityCard() });
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
    this.setState({ cards, cardsChangeList: [], quantityCard: this.deck.quantityCard(), combination: new PokerHand(comb).getOutcome() })
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
            return <Card key={item.id} pick={item.pick} suit={item.suit} rank={item.rank} pickCard={() => this.pickCard(item.id)} />
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
