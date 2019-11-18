import nanoid from 'nanoid';
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['D', 'S', 'C', 'H'];
const priorRank = {
  '2': 0,
  '3': 1,
  '4': 2,
  '5': 3,
  '6': 4,
  '7': 5,
  '8': 6,
  '9': 7,
  '10': 8,
  'J': 9,
  'Q': 10,
  'K': 11,
  'A': 12
};
export default class CardDeck {
  constructor() {
    this.deck = [];
    this.priorRank = '';
    this.priorSuit = '';
    ranks.forEach((i) => {
      this.priorRank = priorRank[i]
      suits.forEach(j => {
        this.deck.push({ id: nanoid(), rank: i, suit: j, priorRank: this.priorRank, pick: false })
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
      cards.push(...this.getCard())
    }
    return cards;
  }

  quantityCard = () => {
    return this.deck.length
  }
};
