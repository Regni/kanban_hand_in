import React, { useContext } from "react";

const TaskPopup = ({ task, setIsOpen, onClose }) => {
  //changes the popup back to hidden
  const handleClose = () => setIsOpen(false);
  return (
    <div className="popupContainer">
      <h2>{task.title}</h2>
      <p>{task.date}</p>
      <p>{task.content}</p>
      <button onClick={handleClose}>closing</button>
    </div>
  );
};

export default TaskPopup;
