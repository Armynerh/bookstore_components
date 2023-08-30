import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddbook = useCallback((event) => {
    event.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        item_id: uuidV4(),
      }),
    );
    setTitle('');
    setAuthor('');
  },
  [author, title, dispatch]);
  return (
    <div className="flex formInput">
      <form className="auto">
        <input type="text" placeholder="Book Title." value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder="Author." value={author} onChange={(event) => setAuthor(event.target.value)} />
        <button type="submit" onClick={handleAddbook}>ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
