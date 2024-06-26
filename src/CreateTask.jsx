import React, { useContext, useState } from "react";
import DataContext from "./context/DataContext";
import "./style/CreateTask.css";
import { useNavigate } from "react-router-dom";
const CreateTask = () => {
  //set states here and a example of what the task object should look like before it is moved to post
  const backToMain = useNavigate();
  const { posts, setPosts } = useContext(DataContext);
  const [newTask, setNewTask] = useState({
    id: getID(),
    title: "",
    content: "",
    date: new Date().toDateString(),
    assignedTo: 0,
  });

  //Function to find a unique ID, will re-use ID if a task has been removed.
  function getID() {
    if (posts != null) {
      const allID = posts.map((task) => task.id);
      for (let i = 1; i <= allID.length; i++) {
        if (!allID.includes(i)) {
          return i;
        }
      }
      return allID.length + 1;
    }
    return 1;
  }
  //Save changes to the new task
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((current) => ({ ...current, [name]: value }));
  };

  //saves the new tasks to the post context and return user to main board
  const handleFormSumbmit = (e) => {
    e.preventDefault();
    getID();
    setPosts((prev) => [...prev, newTask]);
    backToMain("/");
  };

  return (
    <div className="createClassContainer">
      <h3>Create new task</h3>
      <form onSubmit={handleFormSumbmit}>
        <div className="formElement">
          <label htmlFor="newTaskTitle">Title: </label>
          <input
            onChange={handleChange}
            name="title"
            id="newTaskTitle"
            type="text"
          />
        </div>
        <div className="formElement">
          <label htmlFor="newTaskContent">Content: </label>
          <textarea
            onChange={handleChange}
            name="content"
            id="newTaskContent"
            rows={5}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
