import { useState } from 'react'
import './BookShelf.css'

function BookShelf() {
    const [formData, setFormData] = useState({ title: '', author: '' })
    const [book, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    function handleSubmit(event) {
        event.preventDefault()
        setFormData({ title: '', author: '' })
        setBooks([...book, formData])
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <div className='add-book'>
                <h2>Add a book</h2>

                <form onSubmit={handleSubmit} >
                    <div className='add-form'>
                        <label htmlFor="title">Title: </label>
                        <input onChange={handleChange} value={formData.title} type="text" name="title" id="title" />
                        <br />
                        <label htmlFor="author">Author: </label>
                        <input onChange={handleChange} value={formData.author} type="text" name="author" id="author" />
                        <br />
                    </div>
                    <button className='add'>Add</button>
                </form>
            </div>

            <div className='add-book'>
                <h2>All Books</h2>

                {book.map((oneBook) =>
                    <div>
                        <p>{oneBook.title} <strong>Written by:</strong> {oneBook.author}</p>
                    </div>)}
            </div>
        </>
    )
}

export default BookShelf
