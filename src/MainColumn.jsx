import React from "react";
import { useContext } from "react";
import Post from "./Post";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const MainColumn = () => {
  const { posts, setPosts } = useContext(DataContext);

  //This will create a post and send it to the data context
  function handleCreatePost() {}

  return (
    <div className="Column mainColumn">
      <h2>Todo</h2>
      {posts.map((test) =>
        test.assignedTo === 0 ? (
          <Post
            title={test.title}
            content={test.content}
            id={test.id}
            date={test.date}
            key={`${test.id}key`}
          />
        ) : null
      )}
      <button className="addTask">
        <Link to="/create">Create new task</Link>
      </button>
    </div>
  );
};

export default MainColumn;
