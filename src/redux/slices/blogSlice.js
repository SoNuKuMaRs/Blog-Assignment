import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
  },
});

export const { setBlogs, addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;