import React, { Component } from 'react';
import ChartList from '../components/ChartList.js';
import request from '../helpers/request.js';

class ChartContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      chart: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    request(url, (data) => {
      this.setState( { chart: data.feed.entry } )
    })
  }

  pauseAllOtherAudio(event) {
    const audioElements = Array.from(document.getElementsByTagName("audio"));
    const buttonElements = Array.from(document.getElementsByTagName("button"));
    audioElements.forEach((audioElement, index) => {
      if (audioElement.id === event.target.value) {
        if (!audioElement.paused) {
          audioElement.pause();
          buttonElements[index].classList.remove('pause-button');
          buttonElements[index].classList.add('play-button');
        } else {
          audioElement.play();
          console.log(buttonElements[index]);
          buttonElements[index].classList.remove('play-button')
          buttonElements[index].classList.add('pause-button')
        }
      } else {
        audioElement.pause();
        buttonElements[index].classList.remove('pause-button');
        buttonElements[index].classList.add('play-button');
      }
    })
  }

  render() {

    return (
      <ChartList chart={this.state.chart} playPause={this.pauseAllOtherAudio}/>
    );
  }
}

export default ChartContainer;
