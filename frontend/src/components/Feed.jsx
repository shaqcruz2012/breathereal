import { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { getPosts } from './utilities';
import UserPost from './UserPost';
import BigSearchCard from './BigSearchCard';

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
    <Stack className='align-items-center' gap={2}>
      {posts.map((post) => (
        <UserPost {...post} />
      ))}
    </Stack>
  );
}
