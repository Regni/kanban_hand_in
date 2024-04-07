import React, { Children } from "react";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //useState that will hold each task/post or empty arry if local storage is empty

  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("allTasks")) || []
  );
  //useState that will contain a array of names of columns their index is also in which order they will show up
  // I never used set columns but it was made to add new columns and and easily be upgrading (if more tiem)
  const [columns, setColumns] = useState(["todo", "doing", "done"]);

  //Removes the div and information from the post
  const handleDelete = (id) => {
    const newPostsList = posts.filter((task) => task.id != id);
    setPosts(newPostsList);
  };

  //this will update every time posts is update.
  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(posts));
  }, [posts]);

  return (
    <DataContext.Provider value={{ posts, setPosts, columns, handleDelete }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
