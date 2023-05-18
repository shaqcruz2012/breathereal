import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Feed from '../Feed';


export default function FeedPage() {
    
    return (
        <Stack className='align-items-center'>
            <h1>Feed</h1>
            <Feed />
        </Stack>
    )
}
