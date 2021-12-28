import React from 'react'
import Lyrics from './Lyrics'
import useWindowDimensions from './useWindowDimensions'

function Sidebar ({
  setStartMinutes,
  setEndMinutes,
  setStartSeconds,
  setEndSeconds,
  startMinutes,
  endMinutes,
  startSeconds,
  endSeconds,
  ...props
}) {
  const { width } = useWindowDimensions()

  const lyricsStyles = {
    minWidth: width >= 600 ? '600px' : 'auto',
    fontSize: '1.5rem',
    padding: '1rem',
    overflowY: 'auto',
    position: 'relative',
    color: 'white',
    background: 'black'
  }

  return (
    <div style={lyricsStyles}>
      {/* <label>Start Minutes</label>
      <input value={startMinutes} onChange={event => setStartMinutes(parseInt(event.target.value))} />
      <label>Seconds</label>
      <input value={startSeconds} onChange={event => setStartSeconds(parseInt(event.target.value))}  />

      <label>End Minutes</label>
      <input value={endMinutes} onChange={event => setEndMinutes(parseInt(event.target.value))} />
      <label>Seconds</label>
      <input value={endSeconds} onChange={event => setEndSeconds(parseInt(event.target.value)
)} /> */}
      <Lyrics {...props} />
    </div>
  )
}

export default Sidebar
