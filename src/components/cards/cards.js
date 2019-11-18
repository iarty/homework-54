import React, { Fragment } from 'react';
import './cards.css';

const suitsImg = {
  diams: '♦',
  hearts: '♥',
  spades: '♠',
  clubs: '♣',
}

const suits = {
  'D': 'diams',
  'H': 'hearts',
  'C': 'clubs',
  'S': 'spades'
}

export default (props) => {
  let className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;
  if (props.pick) {
    className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]} pickCard`
  } else {
    className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`
  }
  return (
    <Fragment>
      <a href="/#" className={className} onClick={props.pickCard}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{suitsImg[suits[props.suit]]}</span>
      </a>
    </Fragment>
  )
}
