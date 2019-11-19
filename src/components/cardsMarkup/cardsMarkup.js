import React, { Fragment } from 'react';
import Card from '../cards/cards'

export default (props) => {
  return (
    <Fragment>
      <div className="card-wrap">
        <div className="button-inner">
          {props.quantity ?
            <button key="bp1" onClick={props.nextCard}>show next card</button>
            :
            <button key="bp1" disabled>show next card</button>
          }
          <br />
          <button onClick={props.newGame}>new game</button>
          <br />
          <span>Cards quantity: {props.quantity}</span>
        </div>
        <div style={{ margin: '20px 0' }}>
          {props.cards.map(item => <Card key={item.id} pick={item.pick} suit={item.suit} rank={item.rank} pickCard={() => props.pickCard(item.id)} />)}
          <br />
          <span>{props.combination}</span>
        </div>
        <div className="button-inner">
          {!props.disableChangeCard && !props.takeBtn && props.cardPicked ?
            <button key="bp2" onClick={props.changeCard}>change cards</button>
            :
            <button key="bp2" disabled>change cards</button>
          }
          <br />
          {!props.takeBtn ?
            <button key="bp3" onClick={props.takeMoney}>Take money</button>
            :
            <button key="bp3" disabled>Take money</button>}
        </div>
      </div>
    </Fragment>
  )
}
