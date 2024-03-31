import React from "react";
import Post from "./Post";

const Column = ({ title, posts = [] }) => {
  return (
    <div className="Column">
      <h2>{title}</h2>
      {posts.map((test) => (
        <Post title={test.title} content={test.content} key={test.id} />
      ))}
    </div>
  );
};

export default Column;
