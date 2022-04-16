import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../Firebase/config'
import { useAuthContext } from './useAuthContext'

export default function useLogout() {
    const [error, setError] = useState(null)
    const [loading, setLogout] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setLogout(true)
        await signOut(auth)
            .then(() => {
                setLogout(false)
                dispatch({ type: 'LOGOUT' });
            })
            .catch((err) => {
                setError(err.message)
            })
    }
    return [error, logout, loading]
}