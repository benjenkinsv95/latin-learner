import React from 'react'
import ReactPlayer from 'react-player'

function Video ({
  setPlayer,
  playing,
  setPlaying,
  setSelectedLine,
  startSeconds,
  startMinutes,
  endMinutes,
  endSeconds,
  player,
  allLines,
  youtubeId
}) {
  const handleProgress = event => {
    const playedSeconds = Math.floor(event.playedSeconds)

    const currentLine = allLines.find(line => {
      const timestampSeconds =
        line.minutesTimestamp * 60 + line.secondsTimestamp
      return timestampSeconds === playedSeconds
    })

    if (currentLine) {
      console.log(currentLine)
      const index = allLines.findIndex(s => s._id === currentLine._id)
      const closerIndex = Math.max(index - 3, 0)
      const closerLine = allLines[closerIndex]

      setSelectedLine(currentLine)
      document.getElementById(closerLine._id).scrollIntoView()
    }

    const startTimestampSeconds = startMinutes * 60 + startSeconds
    const endTimestampSeconds = endMinutes * 60 + endSeconds
    console.log(
      startTimestampSeconds,
      endTimestampSeconds,
      playedSeconds,
      startMinutes,
      startSeconds
    )
    if (
      playedSeconds >= endTimestampSeconds &&
      startTimestampSeconds < endTimestampSeconds &&
      endTimestampSeconds !== 0
    ) {
      // player?.seekTo(startTimestampSeconds)
      // setPlaying(true)
    }
  }

  //   const startTimestampSeconds =
  //   allLines[0].minutesTimestamp * 60 + allLines[0].secondsTimestamp

  return (
    <ReactPlayer
      width='100%'
      controls={true}
      height='100%'
      playing={playing}
      onPlay={isPlaying => setPlaying(isPlaying)}
      loop={true}
      url={`https://www.youtube.com/watch?v=${youtubeId}`}
      onProgress={handleProgress}
      ref={player => {
        setPlayer(player)
      }}
    //   config={{
    //     youtube: {
    //       playerVars: {
    //         start: startTimestampSeconds
    //       }
    //     }
    //   }}
    />
  )
}

export default Video
