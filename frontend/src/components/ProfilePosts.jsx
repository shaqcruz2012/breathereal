import { Card, Image, Stack, Form, InputGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postContentUpdate } from './utilities';

export default function ProfilePosts(props) {
  const { id, content, location, track, user} = props;
  const { track_name, artist_name, imgurl } = track;
  const { city, state } = location;
  
  const { register, handleSubmit } = useForm();
  const [newContent, setNewContent] = useState([])
  
  async function handlePostUpdate(data) {
    console.log('profilePost.jsx data:', data); 
    const updatedContent = await postContentUpdate(data["Content Input"], id);
    console.log('profilePost.jsx updatedContent:', updatedContent);    
    setNewContent(updatedContent);
  };

  async function handleDeletePost(data) {
    return
    // todo: delete post from db and refresh page to show updated feed 
    // 
  };

  return (
    // size this card=>
    <Card className={'w-100'}>
      <Card.Body className={'px-0 py-0'} >
        <Stack fluid gap={1}>
          <div>
            <Image fluid className={'w-100'} 
              src=
                {imgurl}/>
          </div>
          <div className={'px-1 py-1 '}>
              <Card.Text className={'text-truncate fs-7 py-0'}>{user} recommends {track_name} in {city}</Card.Text>
          </div>
          <div>
            <Card.Text> "{content}"</Card.Text>

            <Form onSubmit={handleSubmit(handlePostUpdate)}>
              <Form.Group>
                {/* <Form.Label className={'fs-4'}>Update Post</Form.Label> */}
                <InputGroup>
                  <Form.Control
                    placeholder="What's the update?"
                    type="text"
                    {...register("Content Input")}
                  />
                  <Button type="submit">
                    Update
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
            
            {/* <Button variant="primary" onClick={}>Delete post</Button> */}
            {/* <Card.Text>{location ? `${location.city}, ${location.state}` : "Chicago, IL"}</Card.Text> */}
          </div>
        </Stack>  
      </Card.Body>
    </Card>
  );
}

