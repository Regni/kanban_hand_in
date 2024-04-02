import React from 'react'
import { useContext } from "react";
import Post from "./Post";
import DataContext from "./context/DataContext";

const MainColumn = () => {
    const { posts, setPosts } = useContext(DataContext);

  return (
    <div className="Column mainColumn">
      <h2>Todo</h2>
      {posts.map((test) => test.assignedTo === 0 ? ( 
        <Post
          title={test.title}
          content={test.content}
          id={test.id}
          date={test.date}
          key={`${test.id}key`}
        />
      ):<></>)}
      <button className='addTask'>Add Task</button>
    </div>
  )
}

export default MainColumn