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

  render() {

    return (
      <ChartList chart={this.state.chart}/>
    );
  }
}

export default ChartContainer;
