import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import loading from './loading.png';
import AddBook from './Addbook';

const BooksList = () => {
  const [books] = useState([
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action ',
      percentage: '64% ',
      chapter: 'Chapter 17',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      percentage: '8% ',
      chapter: 'Chapter 13: "A Lesson Learned"',
    },
    {
      id: uuidv4(),
      title: 'Capital In The Twenty-First Century',
      author: 'Suzzane Collins',
      category: 'Economy',
      percentage: '0%',
      chapter: 'Introduction',
    },
  ]);
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
                  <span className="spanItem color1 p2">Remove</span>
                  <span className="spanItem borderless color1 p2">Edit</span>
                </div>
              </div>
              <div className="list flex load">
                <img src={loading} alt="loading" />
                <p>
                  {book.percentage}
                  <br />
                  completed
                </p>
              </div>
              <div className="list">
                <p className="p4">CURRENT CHAPTER</p>
                <p className="p5">{book.chapter}</p>
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
