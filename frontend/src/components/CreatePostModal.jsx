import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CreatePost from './CreatePost';
import Search from './Search';

export default function CreatePostModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


return(
  <>
  <Modal show={show} onHide={handleClose} size='lg' >
        <Modal.Header closeButton>
          <Modal.Title>Create a Breathereal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreatePost handleClose = {handleClose} namething = {"example"} />
        </Modal.Body>
      </Modal>
      <Button variant="primary" onClick={handleShow}>
      Create Post
      </Button>
      </>
)
}