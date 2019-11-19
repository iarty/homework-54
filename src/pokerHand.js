const suits = {
  C: '♣',
  D: '♦',
  H: '♥',
  S: '♠'
}
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

export default class PokerHand {
  constructor(arr) {
    this.sortArr = arr.sort((a, b) => a.priorRank - b.priorRank)
  }

  countSuites = (suitArray) => {
    let suitCount = {};
    suitArray.forEach(el => suitCount[el.suit] = (suitCount[el.suit] || 0) + 1);
    return suitCount;
  }

  countRanks = (rankArray) => {
    let rankCount = {};
    rankArray.forEach(el => rankCount[el.rank] = (rankCount[el.rank] || 0) + 1);
    return rankCount;
  }

  isFlush = () => {
    const countSuit = this.countSuites(this.sortArr);
    if (Object.keys(countSuit).find(key => countSuit[key] === 5)) {
      return true;
    } else {
      return false;
    }
  }

  isStraight = () => {
    const index = ranks.indexOf(this.sortArr[0].rank);
    const ref = ranks.slice(index, index + 5).join('');
    const section = this.sortArr.map(el => el.rank).join('');
    if (section === "10JQKA" && section === ref) {
      return "ROYALSTRAIGHT";
    } else if (section === "2345A" || section === ref) {
      return "STRAIGHT";
    } else {
      return false;
    }
  }

  isPairs = () => {
    const rankSuit = this.countRanks(this.sortArr);
    return Object.keys(rankSuit).filter(key => rankSuit[key] === 2).length
  }

  changeSuits = (arr) => {
    arr.forEach((el) => {
      for (const key in suits) {
        if (suits.hasOwnProperty(key)) {
          if (el.suit === key) {
            el.suit = suits[el.suit]
          }
        }
      }
    })
    return arr;
  }

  getOutcome = () => {
    const rankSuit = this.countRanks(this.sortArr);
    const arr = this.sortArr.sort((a, b) => b.priorRank - a.priorRank)
    if (this.isFlush() === true && this.isStraight() === "ROYALSTRAIGHT") {
      return 'Royal Flush'
    } else if (this.isFlush() === true && this.isStraight() === "STRAIGHT") {
      return 'Straight Flush'
    } else if (Object.keys(rankSuit).find(key => rankSuit[key] === 4)) {
      return `Four of a Kind (${arr[2].rank})`
    } else if (Object.keys(rankSuit).find(key => rankSuit[key] === 3) && this.isPairs() === 1) {
      return 'Full House'
    } else if (this.isFlush() === true) {
      return 'Flush'
    } else if (this.isStraight() === "STRAIGHT") {
      return ('Straight')
    } else if (Object.keys(rankSuit).find(key => rankSuit[key] === 3)) {
      return `Three of a Kind (${arr[2].rank})`
    } else if (this.isPairs() === 2) {
      return `Two Pair (${Object.keys(rankSuit).filter((key) => rankSuit[key] === 2)})`
    } else if (this.isPairs() === 1) {
      return `Pair (${Object.keys(rankSuit).filter((key) => rankSuit[key] === 2)})`
    } else {
      return `High Card (${arr[0].rank})`
    }
  }
}
