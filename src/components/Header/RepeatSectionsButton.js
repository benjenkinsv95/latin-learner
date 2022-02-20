import React from 'react'

const RepeatSectionsButton = ({ song }) =>
  song &&
  song.repeatSectionsUrl && (
    <a href={song.repeatSectionsUrl} target='_blank' rel='noreferrer'>
      <button className='btn btn-outline-secondary'>Repeat Sections</button>
    </a>
  )

export default RepeatSectionsButton
