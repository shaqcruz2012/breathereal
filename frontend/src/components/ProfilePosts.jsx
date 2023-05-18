/**
 * @file ProfilePosts.jsx
 * @brief Displays a user's posts on their profile page.
 * @details This component is used to display a user's posts on their profile page.
 * TODO: Update and delete cards: refresh page after update/delete
 * TODO: Feed go from most recent to least recent
 */
import { Card, Image, Stack, Form, InputGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postContentUpdate, deletePost } from './utilities';

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

  async function handleDeletePost() {
    const success = await deletePost(id);
    if (success) {
        console.log(`Post ${id} deleted.`);
    } else {
        console.log(`Failed to delete post ${id}.`);
    }
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
              <Card.Text className={'text-truncate fs-7 py-0'}>
                {track_name} by {artist_name} - Now in {city} 
              </Card.Text>
          </div>
          <div>
            <Card.Text>{user}: "{content}"</Card.Text>
            <Form onSubmit={handleSubmit(handlePostUpdate)}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    placeholder="What's the update?"
                    type="text"
                    {...register("Content Input")}
                  />
                  <Button variant="success" type="submit">Update</Button>
                </InputGroup>
              </Form.Group>
            </Form>
            <Button variant="secondary" onClick={handleDeletePost}>Delete Post?</Button>
            <Button variant="secondary" onClick={() => window.location.reload()}>Apply Changes?</Button>
          </div>
        </Stack>  
      </Card.Body>
    </Card>
  );
}

