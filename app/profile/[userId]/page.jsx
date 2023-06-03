'use client';

import Profile from '@components/profile';
import { useState, useEffect } from 'react';

const UserProfile = ({ params }) => {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      console.log(params.userId);
      const postsResponse = await fetch(`/api/users/${params.userId}/posts`);
      const userDataResponse = await fetch(`/api/users/${params.userId}`);
      const postsData = await postsResponse.json();
      const userData = await userDataResponse.json();

      setPosts(postsData);
      setUserName(userData.username);
    };

    fetchPosts();
  }, []);

  return (
    <Profile
      name={`${userName}'s`}
      desc={`Welcome to ${userName}'s personalized profile page`}
      data={posts}
    />
  );
};

export default UserProfile;
