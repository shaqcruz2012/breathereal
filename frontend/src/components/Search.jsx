import 'bootstrap/dist/css/bootstrap.min.css'
import { InputGroup, FormControl, Row, Form, Stack, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import SearchCard from './SearchCard'
import { getSpotifyTracks } from './utilities'
import BigSearchCard from './BigSearchCard'



export default function Search ({setSelectedMusic, selectedMusic}) {
  const [searchResults, setSearchResults] = useState([])
  const { register, handleSubmit } = useForm();
  
  async function handleSpotifyAPI(data) {
    const tracks = await getSpotifyTracks(data);    
    setSearchResults(tracks);
  }

  return (
    // search bar
    <div className='Searcher'>
      <Stack gap={4}>
        <Form onSubmit={handleSubmit(handleSpotifyAPI)}>
          <Form.Group>
            <Form.Label className={'fs-4'}>Search for a Track</Form.Label>
            <InputGroup>
            <Form.Control
              placeholder="what's the vibe rn?"
              type="text"
              {...register("Search Input")}
            />
            <Button type="submit">
              Search
            </Button>
            </InputGroup>
          </Form.Group>
        </Form>
        
        {/* search results */}
        <div>
          <h3 className={'fs-4'}>Post Song</h3>
          {searchResults.length > 0 && 
            selectedMusic === null && 
            searchResults.map((track) => <SearchCard setSelectedMusic={setSelectedMusic} {...track}/>
            )}

          {selectedMusic && 
            <BigSearchCard 
              setSelectedMusic={setSelectedMusic} 
              selectedMusic={selectedMusic} />}
        </div>
            {searchResults.length === 0 && selectedMusic === null && 
            <div style={{
              height:'300px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'}}>
                <p>You need to search for a song</p>
            </div>}
      </Stack>
    </div>
  )
}