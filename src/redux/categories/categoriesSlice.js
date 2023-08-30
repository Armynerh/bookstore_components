import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
};
const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});
console.log(categoriesSlice);
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
