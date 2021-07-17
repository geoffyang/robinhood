import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {


  const [ ticker, setTicker] = useState();
  const [ userId, ticker]  = useParams();

  useEffect(() => {

    (async () => {
      const response = await fetch(`/api/watchlist-stocks/${userId}`);
      const userId = await response.json();
    //   setUser(user); gonna have to make thunk etc...going to sleep
    })
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
