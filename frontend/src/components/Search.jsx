// import '.App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import { useState, useEffect } from 'react'
// import { getArtists } from './utilities'

const CLIENT_ID = "1abc5eab32db46f4ae799d39abdf79ec"
const CLIENT_SECRET = "bcf425df50594439ad1ebc2c13603752"

export const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('') // [accessToken, setAccessToken] = useState('')
  // not in tutorial, but I think we need this
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json()) 
      .then(data => console.log(data))

  }, [searchInput])

  return (
    <div className='Searcher'>
      <Container>
        <InputGroup>
          <FormControl
            placeholder="Search for an Artist"
            type="input"
            onKeyPress={event => {
              if (event.key === "Enter") {
                console.log("Enter key pressed")
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          <Button onClick={ event => console.log("Clicked Button")}>
            Search
          </Button>
        </InputGroup>
      </Container>
      
      <Container>
        <Row className='mx-2 row row-cols-4'>
          <Card>
            <Card.Img src="#" />
            <Card.Body>
              <Card.Title>Album Name Here</Card.Title>
            </Card.Body> 
          </Card>
        </Row>
      </Container>
    </div>
  )
}