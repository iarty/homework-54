const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['D', 'S', 'C', 'H'];

export default class CardDeck {
  constructor() {
    this.deck = [];
    ranks.forEach(i => {
      suits.forEach(j => {
        this.deck.push({ rank: i, suit: j })
      })
    })
  }

  getCard = () => {
    const index = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(index, 1);
  }

  getCards = (howMany) => {
    const cards = [];
    for (let index = 0; index < howMany; index++) {
      cards.push(this.getCard())
    }
  }
};
