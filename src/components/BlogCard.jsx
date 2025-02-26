import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-700 mb-4">
          {blog.description.substring(0, 100)}...
        </p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;