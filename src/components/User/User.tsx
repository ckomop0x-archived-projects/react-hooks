import React, {useState, useContext} from 'react';

// @ts-ignore
const UserContext = React.createContext()

const UserDetails = () => {
  const {user, setUser} = useContext(UserContext)

  return (
    <div>
      <p>User: {user}</p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

const Login = () => {
  const {user, setUser} = useContext(UserContext)
  const [loginName, setLoginName] = useState('')

  return (
    <div>
      <input
        value={loginName}
        onChange={e => setLoginName(e.target.value)}
        placeholder="Login Name"
      />
      <button onClick={() => setUser(loginName)}>Login</button>
    </div>
  )
}

const User = () => {
  const [user, setUser] = useState('')

  return (
    <UserContext.Provider value={{user, setUser}}>
      {user ? <UserDetails/> : <Login/>}
    </UserContext.Provider>
  )
};

export default User
