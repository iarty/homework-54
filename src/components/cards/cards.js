import React from 'react';
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
  return (
    <div className={className}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{suitsImg[suits[props.suit]]}</span>
    </div>
  )
}
