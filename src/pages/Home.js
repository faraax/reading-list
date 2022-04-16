// import { useState, useEffect } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
// import { db } from '../Firebase/config'
// import { collection, getDocs } from 'firebase/firestore'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('books', ['uid', '==', user.uid])
  // const [books, setBooks] = useState(null)

  // useEffect(() => {
  //   const ref = collection(db, 'books')
  //   getDocs(ref)
  //     .then((snapshot) => {
  //       let resp = []
  //       snapshot.docs.forEach(doc => {
  //         resp.push({ id: doc.id, title: doc.data().title })
  //       })
  //       setBooks(resp);
  //     })
  // const getData = async () => {
  //   const data = await getDocs(ref)
  //   try {
  //     let resp = []
  //     data.forEach((res) => {
  //       resp.push({ id: res.id, title: res.data().title })
  //     })
  //     setBooks(resp);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // getData()
  // }, [])

  return (
    <div className="App">
      {documents && <BookList books={documents} error={error} />}
      <BookForm />
    </div>
  );
}
