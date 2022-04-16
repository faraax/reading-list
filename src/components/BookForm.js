import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  const { user } = useAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db, 'books')
    await addDoc(ref, { title: newBook, uid: user.uid })
      .then((data) => {
        console.log(data)
      })
      .catch(err => {
        console.log(err);
      })
    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
