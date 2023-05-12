import { Card, Image,Stack } from 'react-bootstrap';

export default function UserPost(props) {
  const { id, content, location, track} = props;
  // const { tracks } = props; as a future could split the objects into two different components
  const { track_name, artist_name, imgurl } = track;
  
  return (
    // size this card=>
    <Card className={'w-100'}>
      <Card.Body className={'px-0 py-0'} >
        <Stack fluid gap={3}>
          <div>
            <Image fluid className={'w-100'} 
              src=
                {imgurl}/>
          </div>
          <div className={'px-4 py-4'}>
              <Card.Text className={'text-truncate text-capitalize fs-4 fw-bold'}>{track_name}</Card.Text>
              <Card.Text className={'text-capitalize fs-6'}>{artist_name} </Card.Text>
          </div>
          <div>
            <Card.Text>{content}</Card.Text>
            <Card.Text>{location ? `${location.city}, ${location.state}` : "Chicago, IL"}</Card.Text>
          </div>
        </Stack>  
      </Card.Body>
    </Card>


        

  );
}

