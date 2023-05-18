// results show card else show empty div with constraint 
import { Card, Container, Image, Button, Row, Col, Stack } from 'react-bootstrap';

export default function BigSearchCard({selectedMusic}) {
  const {artist, image, name}  = selectedMusic; 
  
  return (
    <Card className={'w-100'}>
      <Card.Body className={'px-0 py-0'} >
        <Stack fluid gap={3}>
          <div>
            <Image 
              fluid className={'w-100'} 
              src=
                {image}/>
          </div>
          <div className={'px-4 py-4'}>
              <Card.Text 
                className={'text-truncate text-capitalize fs-4 fw-bold'}>
                {name}
              </Card.Text>
              <Card.Text 
                className={'text-capitalize fs-6'}>{artist} 
              </Card.Text>
          </div>
        </Stack>  
      </Card.Body>
    </Card>
  );
}