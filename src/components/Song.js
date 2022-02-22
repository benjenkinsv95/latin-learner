import useWindowDimensions from './useWindowDimensions'
import React, { useEffect, useState } from 'react'
import { getSongById } from '../fake-api/songs'
import { useParams } from 'react-router-dom'
import Video from './Video'
import Sidebar from './Sidebar'

function Song ({ song, setSong }) {
  const { id } = useParams()
  const { width } = useWindowDimensions()

  const containerStyles = {
    display: 'flex',
    width: '100%',
    height: 'calc(100vh - 57px)',
    flexDirection: width > 900 ? 'row' : 'column'
  }

  const [player, setPlayer] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [selectedLine, setSelectedLine] = useState(null)

  const [startMinutes, setStartMinutes] = useState(0)
  const [endMinutes, setEndMinutes] = useState(0)
  const [startSeconds, setStartSeconds] = useState(0)
  const [endSeconds, setEndSeconds] = useState(0)

  useEffect(() => {
    getSongById(id)
      .then(response => setSong(response.data.song))
      .catch(console.error)

    // don't show the overflow (scrollbar) for the body on this page
    // because we only want overflow on the lyrics
    document.body.style.overflow = 'hidden'
    return function cleanup () {
      // reset the overflow when leaving the component
      document.body.style.overflow = 'unset'

      // If we leave this component remove the song
      setSong(null)
    }
  }, [])

  if (!song) {
    return <h2>Loading</h2>
  }

  const allLines = []
  console.log(song)
  song.sections.forEach(section => allLines.push(...section.lines))

  return (
    <div style={containerStyles}>
      <Video
        setPlayer={setPlayer}
        playing={playing}
        setPlaying={setPlaying}
        setSelectedLine={setSelectedLine}
        player={player}
        startMinutes={startMinutes}
        endMinutes={endMinutes}
        startSeconds={startSeconds}
        endSeconds={endSeconds}
        allLines={allLines}
        youtubeId={song.youtubeId}
      />
      <Sidebar
        player={player}
        song={song}
        setPlaying={setPlaying}
        selectedLine={selectedLine}
        startMinutes={startMinutes}
        endMinutes={endMinutes}
        startSeconds={startSeconds}
        endSeconds={endSeconds}
        setStartMinutes={setStartMinutes}
        setEndMinutes={setEndMinutes}
        setStartSeconds={setStartSeconds}
        setEndSeconds={setEndSeconds}
      />
    </div>
  )
}

export default Song
