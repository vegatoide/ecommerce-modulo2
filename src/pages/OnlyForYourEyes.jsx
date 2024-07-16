import React from 'react';
import { useAuth } from '../resources/context/AuthContext';

const OnlyForYourEyes = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h2>Welcome Home</h2>
      {currentUser ? (
        <div>
        <p>You are logged in as {currentUser.email}</p>
        <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default OnlyForYourEyes;