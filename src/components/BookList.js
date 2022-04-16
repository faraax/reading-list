import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../Firebase/config"

export default function BookList({ books, error }) {

  const handleClick = async (id) => {
    const docRef = doc(db, 'books', id)
    await deleteDoc(docRef)
      .then(() => {
        console.log("data deleted");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="book-list">
      <ul>
        {error && <p>{error}</p>}
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}