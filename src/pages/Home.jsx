import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../redux/slices/blogSlice";
import BlogCard from "../components/BlogCard";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setBlogs(blogsData));
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;