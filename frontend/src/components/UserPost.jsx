import { Card, Container } from 'react-bootstrap';

export default function UserPost({id,content, location}) {
  
  return (
    <Card key={id}>
      <Card.Body>
        <Card.Text>{content}</Card.Text>
        <Card.Text>{location ? `${location.city}, ${location.state}` : "Chicago, IL"}</Card.Text>
      </Card.Body>
    </Card>
  );
}

