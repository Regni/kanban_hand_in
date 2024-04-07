import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import SelectColumn from "./SelectColumn";
import "./style/FullScreenPost.css";

const FullScreenPost = () => {
  const { ID } = useParams();
  const { posts, setPosts, handleDelete } = useContext(DataContext);
  const [task, setTask] = useState(posts.find((element) => element.id == ID));
  const [editedTask, setEditedTask] = useState(task);

  //when title or conent are editted this will changed the editedTask
  const handleEdit = (e) => {
    const { dataset, innerText } = e.target;
    const { name } = dataset;
    setEditedTask((p) => ({ ...p, [name]: innerText }));
  };
  //save button
  const handleSave = () => {
    const editedPosts = posts.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setPosts(editedPosts);
  };

  return (
    <div className="fullScreenPostContainer" id={ID}>
      <div className="columnSelector">
        <SelectColumn id={ID} />
      </div>
      <h1
        contentEditable
        onInput={handleEdit}
        suppressContentEditableWarning
        data-name="title"
      >
        {task.title}
      </h1>
      <p
        className="fullScreenContent"
        suppressContentEditableWarning
        contentEditable
        onInput={handleEdit}
        data-name="content"
      >
        {task.content}
      </p>
      <div className="buttonContainer">
        <Link to="/">
          <button
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
        </Link>
        <Link to="/">
          <button>Return to board</button>
        </Link>
        <button onClick={handleSave}>save here!</button>
      </div>
    </div>
  );
};

export default FullScreenPost;
