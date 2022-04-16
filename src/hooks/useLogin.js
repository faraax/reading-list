import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
        await signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                dispatch({ type: 'LOGIN', payload: data.user });
                setIsPending(false)
            })
            .catch((err => {
                setError(err.message);
                setIsPending(false)
            }))

    }

    return [login, isPending, error]
}