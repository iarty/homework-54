import React, { Component } from 'react';
import Card from './components/cards/cards';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="playingCards faceImages card-inner">
          <Card suit='D' rank="K" />
          <Card suit='C' rank="2" />
          <Card suit='S' rank="5" />
          <Card suit='H' rank="J" />
          <Card suit='D' rank="A" />
        </div>
      </div>
    )
  }
}
