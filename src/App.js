import React, { Component } from 'react';
import CardsMarkup from './components/cardsMarkup/cardsMarkup'
import CardDeck from './CardDeck';
import PokerHand from './pokerHand';
import Table from './components/table/table.js';
import Winfunc from './components/winfunc/winfunc'

export default class App extends Component {
  state = {
    deck: [],
    cards: [],
    combination: '',
    quantityCard: '',
    cardsChangeList: [],
    money: 100,
    showCard: false,
    numCol: null,
    disableChangeCard: false,
    takeBtn:false,
    cardPicked:false
  };

  constructor() {
    super();
    this.state.deck = new CardDeck();
    this.newDeck = null;
  }

  nextDeck = () => {
    const cards = this.state.deck.getCards(5);
    this.setState({ cards, combination: new PokerHand([...cards]).getOutcome(), quantityCard: this.state.deck.quantityCard() });
  }

  changeCard = () => {
    const arr = this.state.cardsChangeList;
    const newDeck = this.state.deck.getCards(arr.length);
    let cards = this.state.cards;
    cards = cards.filter((el) => {
      return !arr.includes(el);
    })
    cards.unshift(...newDeck)
    this.setState({ cards, cardsChangeList: [], quantityCard: this.state.deck.quantityCard(), combination: new PokerHand([...cards]).getOutcome(), disableChangeCard: true });
  }

  pickCard = (id) => {
    const item = this.state.cards;
    item.forEach(el => {
      if (el.id === id) {
        if (!el.pick) {
          el.pick = !el.pick;
          this.setState(prevState => prevState.cardsChangeList.push(el))
        } else {
          const index = this.state.cardsChangeList.findIndex(p => p.id === id);
          el.pick = !el.pick;
          this.setState(prevState => prevState.cardsChangeList.splice(index, 1))
        }
      }
    })
    this.setState({cardPicked:true})
  }

  start = () => {
    this.newDeck = this.state.deck.getCards(5);
    this.setState({ cards: this.newDeck, combination: new PokerHand([...this.newDeck]).getOutcome(), quantityCard: this.state.deck.quantityCard() });
  }

  pickCol = (e) => {
    const numCol = e.target.textContent;
    if (this.state.showCard === false) {
      this.start()
    }
    this.setState({ numCol, showCard: true });
  }

  takeMoney = () => {
    const result = new Winfunc(this.state.numCol, this.state.combination).result();
    this.setState({ money: this.state.money + result ,takeBtn:true})
  }

  newGame = () => {
    const deck = new CardDeck();
    this.setState({ deck, showCard: false, numCol: null, combination: null, quantityCard: null,takeBtn:false,disableChangeCard:false });
  }

  render() {
    return (
      <div className="container">
        <div className="playingCards faceImages card-inner">
          <table>
            <thead>
              <tr>
                <th>COINS</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            </thead>
            <tbody>
              <Table numCol={this.state.numCol} combination={this.state.combination}  className='table-wrap' />
            </tbody>
          </table>
          <br />
          <div>
            <span>Your money: {this.state.money}$</span>
            <br />
            <button onClick={this.pickCol}>1</button>
            <button onClick={this.pickCol}>2</button>
            <button onClick={this.pickCol}>3</button>
            <button onClick={this.pickCol}>4</button>
            <button onClick={this.pickCol}>5</button>
          </div>
          {this.state.showCard ?
            <CardsMarkup cardPicked={this.state.cardPicked} takeBtn={this.state.takeBtn} cards={this.state.cards} combination={this.state.combination} quantity={this.state.quantityCard} disableChangeCard={this.state.disableChangeCard} pickCard={this.pickCard} changeCard={this.changeCard} nextCard={this.nextDeck} newGame={this.newGame} takeMoney={this.takeMoney} />
            :
            null
          }
        </div>
      </div>
    )
  }
}
