import React, { Children } from "react";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the post content",
      date: new Date().toDateString(),
    },
  ]);

  const [columns, setColumns] = useState(["todo", "doing", "done"]);

  return (
    <DataContext.Provider value={{ posts, setPosts, columns }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
