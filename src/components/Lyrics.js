import React from 'react'

function Lyrics ({ player, selectedLine, song }) {
  const handleClick = line => {
    const timestampSeconds =
      line.minutesTimestamp * 60 + line.secondsTimestamp

    console.log(player, timestampSeconds)
    player?.seekTo(timestampSeconds)
  }

  const sectionElements = song.sections.map((section, index) => {
    const lineElements = section.lines.map((line, j) => (
      <p
        id={line._id}
        key={j}
        onClick={() => handleClick(line)}
        style={{
          background: line._id === selectedLine?._id ? '#444' : 'black',
          fontSize: line._id === selectedLine?._id ? '32px' : '24px'

        }}
      >
        {/* <small>
          [{line.minutesTimestamp}:
          {line.secondsTimestamp.toString().padStart(2, '0')}]
        </small>{' '} */}
        {line.source} <br />
        <small style={{ color: 'cyan', fontWeight: '500' }}>
          {line.translation}
        </small>
        {line.alternateTranslation && (<>
          <br />
          <small style={{ color: 'hotpink', fontWeight: '500' }}>
            {line.alternateTranslation}
          </small>
        </>)}
      </p>
    ))
    return (
      <div key={index} style={{ borderBottom: '2px solid white' }}>
        {section.name && <h6>{section.name}</h6>}
        {lineElements}
      </div>
    )
  })

  return <>{sectionElements}</>
}

export default Lyrics
