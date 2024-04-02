import React, { Children } from "react";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  //useState that will hold each task/post
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the post content",
      date: new Date().toDateString(),
      assignedTo: 0
    },
  ]);
  //useState that will contain a array of names of columns their index is also in which order they will show up
  const [columns, setColumns] = useState([ "doing", "done"]);

  return (
    <DataContext.Provider value={{ posts, setPosts, columns }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
