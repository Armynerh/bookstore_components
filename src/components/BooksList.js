import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loading from './loading.png';
import AddBook from './Addbook';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const handleRemove = async (id) => {
    try {
      dispatch(removeBook(id));
    } catch (e) {
      console.error(e);
    }
  };
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'books/fetchBooks/failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="">
            <div className="booklist auto flex">
              <div className="list cat">
                <div className="bookItem">
                  <p className="p2">{book.category}</p>
                  <p className="p1">{book.title}</p>
                  <p className="p2 color1">{book.author}</p>
                </div>
                <div className="bookItem">
                  <span className="spanItem color1 p2">Comment</span>
                  <button type="submit" className="spanItem color1 p2 btn" onClick={() => handleRemove(book.id)}>Remove</button>
                  <span className="spanItem borderless color1 p2">Edit</span>
                </div>
              </div>
              <div className="list flex load">
                <img src={loading} alt="loading" />
                <p>
                  40%
                  <br />
                  completed
                </p>
              </div>
              <div className="list">
                <p className="p4">CURRENT CHAPTER</p>
                <p className="p5">7</p>
                <button type="submit">UPDATE PROGRESS</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <AddBook />
    </>
  );
};
export default BooksList;
