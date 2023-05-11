import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getPosts } from './utilities';
import UserPost from './UserPost';

export default function Feed() {
  const [posts, setPosts] = useState([]);


  const fetchPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container className='d-flex justify-content-center'>
      <div className='d-flex flex-column justify-content-center'>
        {posts.map((post) => (
          <UserPost {...post} />
        ))}
      </div>
    </Container>
  );
}
