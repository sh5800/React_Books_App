import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from "react";

function BookList ({books,onDelete,onEdit}) {

    const {count, incrementCount} = useContext(BooksContext);

    const renderedBooks = books.map((book)=>{
        return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    })

    return(
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderedBooks}
        </div>
    ); 
}

export default BookList;