import React from 'react';
import '../chartList.css'

const ChartList = (props) => {

  if (!props.chart) return null;

  const songs = props.chart.map((song, index) => {
    return (
      <li key={index}> {song['im:name'].label}
        <p id='artist'>
          - {song['im:artist'].label}
        </p>
        <audio controls src={song.link[1].attributes.href} />
        <p>Price: {song['im:price'].label}</p>
      </li>
    )
  })

  return (
    <ol>
      {songs}
    </ol>
  )
}

export default ChartList;
