import { useState } from 'react'
import BookShelf from '../../../../lectures/Unit 3/vite-project/src/components/BookShelf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Book Shelf</title>
    <h1>Book Shelf</h1>
    <br />
    <BookShelf></BookShelf>
    </>
  )
}

export default App
