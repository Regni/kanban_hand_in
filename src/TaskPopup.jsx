import React, { useContext, useState } from "react";
import DataContext from "./context/DataContext";

const TaskPopup = ({ task, setIsOpen, onClose }) => {
  //creat copy of the task to be edited
  const [editedTask, setEditedTask] = useState(task);
  const { posts, setPosts } = useContext(DataContext);

  //when title or conent are editted this will changed the editedTask
  const handleEdit = (e) => {
    const { dataset, innerText } = e.target;
    const { name } = dataset;
    setEditedTask((p) => ({ ...p, [name]: innerText }));
  };

  //changes the old task to the newEdited one and closes the popup.
  const handleSave = () => {
    const editedPosts = posts.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setPosts(editedPosts);
    handleClose();
  };

  //changes the popup back to hidden
  const handleClose = () => setIsOpen(false);
  return (
    <div className="popupContainer">
      <button onClick={handleClose}>close</button>
      <p>{task.date}</p>
      <h2
        contentEditable
        onInput={handleEdit}
        suppressContentEditableWarning
        data-name="title"
      >
        {task.title}
      </h2>
      <p
        suppressContentEditableWarning
        contentEditable
        onInput={handleEdit}
        data-name="content"
      >
        {task.content}
      </p>
      <button onClick={handleSave}>save changes</button>
    </div>
  );
};

export default TaskPopup;
