import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../Firebase/config'
import { useAuthContext } from './useAuthContext'

export default function useSignup() {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()


    const signup = async (email, password) => {
        setError(null)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                dispatch({ type: 'LOGIN', payload: data.user });
            })
            .catch((err => {
                setError(err.message);
            }))
    }
    return [error, signup]
}
