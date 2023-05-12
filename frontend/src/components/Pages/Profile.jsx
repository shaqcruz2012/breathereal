import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Feed from '../Feed';
// Update and Delete Posts
// Update and delete cards

export default function Profile() {
    
    return (
        <Stack className='align-items-center'>
            <h1>Profile</h1>
            <Feed />
        </Stack>
    )
}