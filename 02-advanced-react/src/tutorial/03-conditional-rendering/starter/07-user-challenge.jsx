import { useState } from "react";

const userDavian = { name: 'davian' };

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser(userDavian);
  };

  const logout = () => {
    setUser(null);
  }

  return (
    <>
      {user ? 
        <h4>{`hello there, ${user.name}`}</h4>
        :
        <h4>Please Login</h4>
      }
      <button type="button" className="btn" onClick={user ? logout : login}>
        {user ? 'logout' : 'login'}
      </button>
      </>
  );
};

export default UserChallenge;
