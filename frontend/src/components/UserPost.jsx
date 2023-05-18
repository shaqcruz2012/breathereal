import { Card, Image,Stack } from 'react-bootstrap';

export default function UserPost(props) {
  const { id, user, content, location, track} = props;
  // const { tracks } = props; as a future could split the objects into two different components
  const { track_name, artist_name, imgurl } = track;
  
  return (
    // size this card=>
    <Card className={'w-100'}>
      <Card.Body className={'px-0 py-0'} >
        <Stack fluid gap={1}>
          <div>
            <Image fluid className={'w-100'} 
              src=
                {imgurl}/>
          </div>
          <div className={'px-1 py-1'}>
              <Card.Text className={'text-truncate text-capitalize fs-6 fw-bold'}>{track_name} - {artist_name}</Card.Text>
              
          {/* </div>
          <div> */}
            <Card.Text>{user} in {location ? `${location.city}` : "Chicago, IL"} says: "{content}"</Card.Text>
          </div>
        </Stack>  
      </Card.Body>
    </Card>


        

  );
}

