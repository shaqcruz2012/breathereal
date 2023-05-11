// JSX componet
import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { createPost } from './utilities';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Search from './Search';


export default function CreatePost() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [ selectedMusic, setSelectedMusic] = useState(null);
  function onSubmit(data) {
    data[selectedMusic] = selectedMusic;
    const response = createPost(data['Post Content'], data['selectedMusic'])
    if (response) {window.location.reload()};
  }
    return (
        <Stack gap={4}>
            <Search setSelectedMusic={setSelectedMusic} selectedMusic={selectedMusic} />
            <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* future: replace useState with nested forms */}
              <Form.Label className={'fs-4'}>Post Content</Form.Label> 
                <Form.Control type="text" placeholder="What's on your mind?" {...register("Post Content")}/>
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </Form>
        </Stack>
    )
}