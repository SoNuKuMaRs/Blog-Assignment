import React from "react";
import BlogForm from "../components/BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, updateBlog, deleteBlog } from "../redux/slices/blogSlice";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  const handleAddBlog = async (blogData) => {
    const docRef = await addDoc(collection(db, "blogs"), blogData);
    dispatch(addBlog({ id: docRef.id, ...blogData }));
  };

  const handleUpdateBlog = async (blogData) => {
    await updateDoc(doc(db, "blogs", blogData.id), blogData);
    dispatch(updateBlog(blogData));
  };

  const handleDeleteBlog = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
    dispatch(deleteBlog(id));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <BlogForm onSubmit={handleAddBlog} />
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <button onClick={() => handleUpdateBlog(blog)}>Edit</button>
          <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;