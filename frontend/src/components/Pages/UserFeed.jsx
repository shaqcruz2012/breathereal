import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreatePost from '../CreatePost';
export default function UserFeed() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <h1>Feed</h1>
            {/* Feed of Posts from all users Card elements in li downpage */}

            <Button variant="primary" onClick={handleShow}>
            Create Post
            </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Breathereal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <CreatePost handleClose = {handleClose} namething = {"example"} />
        </Modal.Body>
      </Modal>

      </div>
    )
}
// Form fields are content and location
// post_id = models.AutoField(primary_key=True)
//     user = models.ForeignKey(App_User, on_delete=models.CASCADE, null=True)
//     content = models.TextField()
//     created_at = models.DateTimeField(auto_now_add=True)
//     location = models.TextField()