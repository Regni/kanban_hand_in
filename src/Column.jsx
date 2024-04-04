import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const Column = ({ title, index }) => {
  const { posts, setPosts, columns } = useContext(DataContext);

  //To handle the drop and drag of elements
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    const draggedId = e.dataTransfer.getData("id");

    const draggedPost = posts.find((task) => task.id === Number(draggedId));
    draggedPost.assignedTo = columns.indexOf(targetColumn);

    const updatePost = posts.map((task) =>
      task.id === Number(draggedId) ? draggedPost : task
    );
    setPosts(updatePost);
  };

  return (
    <div
      className="Column"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e, title)}
    >
      <h2>{title}</h2>

      {posts != null
        ? posts.map((test) =>
            test.assignedTo === index ? (
              <Post
                title={test.title}
                content={test.content}
                id={test.id}
                date={test.date}
                key={`${test.id}key`}
              />
            ) : null
          )
        : null}
      {/* if it is the first column it will add a create task element to link to other page */}
      {index === 0 ? (
        <button className="addTask">
          <Link to="/create">Create new task</Link>
        </button>
      ) : null}
    </div>
  );
};

export default Column;
