import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "./context/DataContext";

const Column = ({ title, index }) => {
  const { posts, setPosts } = useContext(DataContext);

  return (
    <div className="Column">
      <h2>{title}</h2>
      {posts.map((test) =>
        test.isAssigned === index ? (
          <Post
            title={test.title}
            content={test.content}
            id={test.id}
            date={test.date}
            key={`${test.id}key`}
          />
        ) : null
      )}
    </div>
  );
};

export default Column;
