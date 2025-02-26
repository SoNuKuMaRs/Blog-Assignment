import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogs } = useSelector((state) => state.blogs);
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.coverImage} alt={blog.title} />
      <p>{blog.description}</p>
    </div>
  );
};

export default SingleBlog;