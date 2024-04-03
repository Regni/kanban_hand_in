import React, { useContext, useEffect, useState } from "react";
import DataContext from "./context/DataContext";
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
    const allID = posts.map((task) => task.id);
    for (let i = 1; i <= allID.length; i++) {
      if (!allID.includes(i)) {
        return i;
      }
    }
    return allID.length + 1;
  }
  //Save changes to the new task
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((current) => ({ ...current, [name]: value }));
  };

  //saves the new tasks to the post context and return user to main board
  const handleSumbmit = (e) => {
    e.preventDefault();
    getID();
    setPosts((prev) => [...prev, newTask]);
    backToMain("/");
  };

  return (
    <div>
      <h3>Create new task</h3>
      <form onSubmit={handleSumbmit}>
        <label htmlFor="newTaskTitle">Title: </label>
        <input
          onChange={handleChange}
          name="title"
          id="newTaskTitle"
          type="text"
        />
        <br />
        <label htmlFor="newTaskContent">Content: </label>
        <input
          onChange={handleChange}
          name="content"
          id="newTaskContent"
          type="textarea"
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
