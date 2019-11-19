
export default class winfunc {
  constructor(money, comb) {
    this.money = money;
    this.comb = comb;
    this.tbl = { 'Royal Flush': 9, 'Straight Flush': 8, 'Four of a Kind': 7, 'Full House': 6, 'Flush': 5, 'Straight': 4, 'Three of a Kind': 3, 'Two Pair': 2, 'Pair': 1, 'Hight Card': 0 }
  }
  result = () => {
    let result = null;
    for (const key in this.tbl) {
      if (this.tbl.hasOwnProperty(key)) {
        if (~this.comb.indexOf(key)) {
          result = this.money * this.tbl[key]
        }
      }
    }
    if (result) {
      return result
    } else {
      return -this.money
    }
  }
}
