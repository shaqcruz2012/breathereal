import { UserContext } from '../App';
import { Link, useNavigate } from "react-router-dom"
import React, { useContext, useState } from 'react';
import { Stack, Button, InputGroup, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ProfileFeed from '../ProfileFeed';
import { deleteAccount, updateAccountName } from "../utilities";

export default function Profile() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const { user } = useContext(UserContext);

  const handleDeleteAccount = async () => {
    const success = await deleteAccount();
    if (success) {
      console.log(`Account deleted.`);
      navigate('/');
    }
  };

  const handleUpdateName = async (data) => {
    const success = await updateAccountName(data["New Name"]);
    if (success) {
      console.log("Account name updated.");
      navigate('/feed/')
    } else {
      console.log("Failed to update account name.");
    }
  };
    
    return (
        <Stack className='align-items-center'>
            <h1>{user ? user.name : 'hi'}</h1>
            <h3>your breathereals:</h3>
            <ProfileFeed />

            <h3>update account name:</h3>
            <Form onSubmit={handleSubmit(handleUpdateName)}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    placeholder="New Name"
                    type="text"
                    {...register("New Name")}
                  />
                  <Button 
                    variant="success" 
                    type="submit">
                    Update
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
            <h3>delete account:</h3>
            {/* TODO: Add a modal to confirm */}
            <Button 
              variant="danger" 
              onClick={handleDeleteAccount}>
              are you sure?
            </Button>
        </Stack>
    )
}