import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../Firebase/config'

export const useCollection = (collectionName) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const ref = collection(db, collectionName)
        const unSub = onSnapshot(ref, (snapshot) => {
            let resp = []
            snapshot.docs.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            })
            setDocuments(resp);
        }, (err) => {
            setError(err)
        })
        return () => unSub()
    }, [collectionName])
    return { documents, error }
}
