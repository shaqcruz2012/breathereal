// results show card else show empty div with constraint 
import { Card, Container, Image, Button, Row, Col } from 'react-bootstrap';

export default function SearchCard({name, album, setSelectedMusic}) {
  const [lgImg, mdImg, smImg]  = album.images.map((imageObject) => imageObject.url)  
  const artist = album.artists[0].name
  return (
    <Card>
      <Card.Body className={'px-0 py-0'} >
      <Container > 
      <Row className={'align-items-center'}>
        <Col xs= {2} className={'px-0'}>
        <Image
          src=
            {smImg}
          rounded
      />
      </Col>

      <Col xs={7}>
        <Card.Text className={'text-nowrap text-truncate'}>{name}</Card.Text>
        <Card.Text>{artist} </Card.Text>
      </Col>

      <Col xs={3}>
        {/* } */}
        <Button onClick={()=> setSelectedMusic({'name':name, 'image': mdImg, 'artist':artist})}>Add</Button>
      </Col>
      </Row>
      </Container>
      </Card.Body>
    </Card>
  );
}