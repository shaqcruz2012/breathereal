import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Feed from '../Feed';


export default function FeedPage() {
    
    return (
        <Container className='d-flex flex-column justify-content-center '>
            <h1>Feed</h1>
            <Feed />
            
        </Container>
    )
}
