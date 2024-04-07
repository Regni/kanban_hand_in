import React, { useContext, useEffect, useState } from "react";
import DataContext from "./context/DataContext";
import { IoMdClose as Closecross } from "react-icons/io";

const TaskPopup = ({ task, setIsOpen, onClose }) => {
  //creat copy of the task to be edited
  const [editedTask, setEditedTask] = useState(task);
  const { posts, setPosts, handleDelete } = useContext(DataContext);

  //rerenders the popup when a user clicks on a card behind the popup
  useEffect(() => {
    setEditedTask({ ...task });
  }, [task]);

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
      <Closecross className="closePopup" onClick={handleClose} />
      <p className="popupDate">{task.date}</p>
      <h1
        contentEditable
        onInput={handleEdit}
        suppressContentEditableWarning
        data-name="title"
      >
        {task.title}
      </h1>
      <p
        suppressContentEditableWarning
        contentEditable
        onInput={handleEdit}
        data-name="content"
        className="popupContent"
      >
        {task.content}
      </p>
      <div className="popupButtons">
        <button onClick={handleSave}>save changes</button>
        <button
          onClick={() => {
            handleDelete(task.id);
            handleClose();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskPopup;
