import React, { Fragment } from 'react';
import '../cards/cards';
import nanoid from 'nanoid';

const colorTd = (props, target) => {
  if (props === `${target}`) {
    return 'rgb(93, 93, 218)'
  }
}

const colorTr = (props, target) => {
  if(props){
  if (~props.indexOf('Pair') && props.length <= 9 && target === 8) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Two Pair') && target === 7) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Three of a Kind') && target === 6) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Straight') && target === 5) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Flush') && target === 4) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Full House') && target === 3) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Four of a Kind') && target === 2) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Straight Flush') && target === 1) {
    return 'rgb(93, 93, 218)'
  }
  if (~props.indexOf('Royal Flush') && target === 1) {
    return 'rgb(93, 93, 218)'
  }}
}

export default (props) => {
  const numberArr = [250, 50, 25, 9, 6, 4, 3, 2, 1];
  const combName = ['Royal Flush', 'Straight Flush', 'Four of a Kind', 'Full House', 'Flush', 'Straight', 'Three of a Kind', 'Two Pair', 'Pair'];
  return (
    <Fragment>
      {combName.map((el, i) => {
        return (
          <tr key={nanoid()} style={{ background: colorTr(props.combination, i) }} >
            <th>{el}</th>
            <td style={{ background: colorTd(props.numCol, 1) }}>{numberArr[i]}</td>
            <td style={{ background: colorTd(props.numCol, 2) }}>{numberArr[i] *= 2}</td>
            <td style={{ background: colorTd(props.numCol, 3) }}>{numberArr[i] += numberArr[i] / 2}</td>
            <td style={{ background: colorTd(props.numCol, 4) }}>{numberArr[i] += numberArr[i] / 3}</td>
            <td style={{ background: colorTd(props.numCol, 5) }}>{numberArr[i] === 1000 ? numberArr[i] *= 4 : numberArr[i] += numberArr[i] / 4}</td>
          </tr>
        )
      })}
    </Fragment>
  )
}
