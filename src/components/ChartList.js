import React from 'react';
import '../chartList.css'

const ChartList = (props) => {

  if (!props.chart) return null;

  const songs = props.chart.map((song, index) => {
    return (
      <div className='song' key={index}>
        <p className='chart-position'> {index + 1}. </p>
        <p className='song-title'> {song['im:name'].label} </p>
        <p className='artist'>
          - {song['im:artist'].label}
        </p>
        <audio
          id={index}
          src={song.link[1].attributes.href}
        />
        <button
          className="play-button"
          value={index}
          onClick={(event) => {
            props.playPause(event);
          }
        }
        >
        </button>
      </div>
    )
  })

  return (
    <div>
      {songs}
    </div>
  )
}

export default ChartList;
