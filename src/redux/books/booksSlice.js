import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: uuidv4(), title: action.payload });
    },
    removeBook: (state, action) => {
      state.tasks = state.booksList.filter((book) => book.id !== action.payload);
    },
  },

});
console.log(booksSlice);
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
