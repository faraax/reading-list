import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import useLogout from '../hooks/useLogout'

export default function Navbar() {
  const [error, logout, loading] = useLogout()
  // useLogout
  const { user } = useAuthContext()
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {
          user && <li><Link to="/">Home</Link></li>
        }
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {
          user && (
            !loading && <li onClick={logout}>Logout</li>
          )
        }

        {
          loading && <li>Loading...</li>
        }
        {error && <p>{error}</p>}
        <li> {user && `User: ${user.email}`}</li>
      </ul>
    </nav >
  )
}