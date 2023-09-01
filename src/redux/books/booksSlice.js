import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/44xkTIwMeG5oizFnKZCD/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(BASE_URL, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = action.type;
        const itemIds = Object.keys(action.payload);
        const books = itemIds.map((id) => {
          const item = action.payload[id][0];
          return {
            ...item,
            id,
          };
        });
        state.books = books;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = action.meta.arg;
        state.books.push(book);
        state.status = action.type;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const deletedBookId = action.meta.arg;
        state.books = state.books.filter((book) => book.id !== deletedBookId);
      });
  },
});

export default bookSlice.reducer;
