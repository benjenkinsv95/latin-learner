import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { knuthShuffle as shuffle } from 'knuth-shuffle'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { getPlaylists } from '../api/playlists'
import { getSongs } from '../api/songs'

const Home = () => {
  const [playlists, setPlaylists] = useState([])
  const [songs, setSongs] = useState([])
  const allMedia = [...playlists, ...songs]
  shuffle(allMedia)

  useEffect(() => {
    getPlaylists()
      .then(response => setPlaylists(response.data.playlists))
      .catch(console.error)

    getSongs()
      .then(response => setSongs(response.data.songs))
      .catch(console.error)
  }, [])

  const mediaElements = allMedia.map(media => (
    <Col key={media._id} sm={6} lg={4} xl={3}>
      <Link className="link-light" to={`/${media.type === 'song' ? 'songs' : 'playlists'}/${media._id}`}>
        <Card className='bg-dark'>
          <Card.Img variant='top' src={`https://i3.ytimg.com/vi/${media.youtubeId || media.songs[Math.floor(media.songs
            .length * Math.random())].youtubeId}/hqdefault.jpg`} />
          <Card.Body>
            <Card.Text>
              <span style={{ fontWeight: 500 }}>
                {media.name} {media.artist && `by ${media.artist}`}
              </span>
              <br/>
              <span className={media.type === 'playlist' ? 'link-primary' : 'link-light'}>
                {media.youtubeChannel || 'Playlist'}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  ))

  return (
    <Container fluid>
      <Row className='pt-4 px-2'>
        {mediaElements}
      </Row>
    </Container>
  )
}

export default Home
