import { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';
import { getPosts, currUser } from './utilities';
import UserPost from './UserPost';
import BigSearchCard from './BigSearchCard';
import ProfilePosts from './ProfilePosts';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      // TODO: Do this filtering at the Rest API level 
      const user = await currUser();
      setCurrentUser(user);
      // console.log('profileFeed.jsx currentUser:', user)

      const posts = await getPosts();
      const userPosts = posts.filter(post => post.user === user.name);
      setPosts(userPosts);
      // console.log('profileFeed.jsx posts:', posts)

    };
        
    fetchUserAndPosts();
  }, []);

  return (
    <Stack className='align-items-center' gap={2}>
      {posts.map((post) => (
        post.user === currentUser.name && <ProfilePosts {...post} />
      ))}
    </Stack>
  );
}
