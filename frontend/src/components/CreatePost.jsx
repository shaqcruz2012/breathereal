// JSX componet
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { createPost } from './utilities';
import { Navigate } from 'react-router-dom';

export default function CreatePost() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data) {
    const response = createPost(data['Post Content'])
    if (response) {window.location.reload()};
  }
    return (
        <div>
            <h1>Create Post</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Share a Breathereal</Form.Label>
                <Form.Control type="text" placeholder="What's on your mind?" {...register("Post Content")}/>
              </Form.Group>
              <Button variant="primary" type="submit" >
                Submit
              </Button>
              
              
            </Form>
        </div>
    )
}