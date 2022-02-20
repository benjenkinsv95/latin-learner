import React from 'react'

const MemriseButton = ({ song }) => (
  song && song.memriseUrl && (
    <a href={song.memriseUrl}
      target='_blank'
      rel="noreferrer">
      <button className='btn btn-outline-primary ms-2'>
      Memorize Lyrics
      </button>
    </a>
  )
)

export default MemriseButton
