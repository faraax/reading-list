import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useState, useEffect, useRef } from 'react'
import { db } from '../Firebase/config'

export const useCollection = (collectionName, _query) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    const newQuery = useRef(_query).current
    useEffect(() => {
        let ref = collection(db, collectionName)
        if (newQuery) {
            ref = query(ref, where(...newQuery))
        }
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
    }, [collectionName, newQuery])
    return { documents, error }
}
