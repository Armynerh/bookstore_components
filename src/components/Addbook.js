import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddbook = async (event) => {
    try {
      const id = uuidV4();
      const category = 'Fiction';
      const newBook = {
        title,
        author,
        category,
        id,
      };
      event.preventDefault();
      dispatch(addBook(newBook));
    } catch (e) {
      console.error(e);
    } finally {
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="flex formInput">
      <form className="auto">
        <div className="formhead"><h2>ADD NEW BOOK</h2></div>
        <br />
        <input type="text" placeholder="Book Title." value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder="Author." value={author} onChange={(event) => setAuthor(event.target.value)} />
        <button type="submit" onClick={handleAddbook}>ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
