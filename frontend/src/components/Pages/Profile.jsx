import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import { Stack, Button } from 'react-bootstrap';
import ProfileFeed from '../ProfileFeed';
import { deleteAccount } from "../utilities";
// Update and Delete Posts
// Update and delete cards

export default function Profile() {
  const navigate = useNavigate()

  const handleDeleteAccount = async () => {
    const success = await deleteAccount();
    if (success) {
      // Account deletion was successful, navigate to a different page
      navigate('/');
    }
  };
    
    return (
        <Stack className='align-items-center'>
            <h1>Profile</h1>
            <h2>Update and Delete Posts</h2>
            <ProfileFeed />
            <h2>Delete Account</h2>
            <Button variant="primary" onClick={handleDeleteAccount}>are you sure?</Button>
        </Stack>
    )
}