import React, { useContext } from "react";
import Post from "./Post";
import DataContext from "./context/DataContext";
import { Link } from "react-router-dom";

const Column = ({ title, index, handleSelect }) => {
  const { posts, setPosts, columns } = useContext(DataContext);

  //To handle the drop and drag of elements
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetColumn) => {
    const draggedId = e.dataTransfer.getData("id");
    //sets the newcolumns index as the assigned to property of the post/task
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
      <h2>
        <Link to={`/column/${title}`}>{title}</Link>
      </h2>

      {posts != null
        ? posts.map((test) =>
            test.assignedTo === index ? (
              <Post
                title={test.title}
                content={test.content}
                id={test.id}
                date={test.date}
                key={`${test.id}key`}
                handleSelect={handleSelect}
              />
            ) : null
          )
        : null}
      {/* if it is the first column it will add a create task element to link to other page */}
      {index === 0 ? (
        <Link to="/create">
          <button className="addTask">Create new task</button>
        </Link>
      ) : null}
    </div>
  );
};

export default Column;
