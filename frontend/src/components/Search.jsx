import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, InputGroup, FormControl, Button, Row, Form, Card, Stack} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import SearchCard from './SearchCard'
import { getSpotifyTracks } from './utilities'
import BigSearchCard from './BigSearchCard'
// import { getArtists } from './utilities'


export default function Search ({setSelectedMusic, selectedMusic}) {
  const [searchInput, setSearchInput] = useState('')
  const [accessToken, setAccessToken] = useState('') // [accessToken, setAccessToken] = useState('')
  // not in tutorial, but I think we need this
  const [searchResults, setSearchResults] = useState([])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  async function handleSpotifyAPI(data) {
    const tracks = await getSpotifyTracks(data);    
    setSearchResults(tracks);
  }


  return (
    <div className='Searcher'>
      <Stack gap={4}>

        <Form onSubmit={handleSubmit(handleSpotifyAPI)}>
          <Form.Group>
            <Form.Label className={'fs-4'}>Search for a Track</Form.Label>
            <InputGroup>
            <Form.Control
              placeholder="Search for an Track"
              type="text"
              {...register("Search Input")}
            />
            <Button type="submit">
              Search
            </Button>
            </InputGroup>
          </Form.Group>
        </Form>
      
        <div>
          <h3 className={'fs-4'}>Post Song</h3>
          {searchResults.length > 0 && selectedMusic === null && 
        searchResults.map((track) => <SearchCard setSelectedMusic={setSelectedMusic} {...track}/>)}
        {selectedMusic && <BigSearchCard setSelectedMusic={setSelectedMusic} selectedMusic={selectedMusic} />}</div>
            {searchResults.length === 0 && selectedMusic === null && 
            <div style={{height:'300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p>You need to search for a song</p>
            </div>}
      </Stack>
    </div>
  )
}