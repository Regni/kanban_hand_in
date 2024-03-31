import React from "react";
import Column from "./Column";
const Board = ({ posts }) => {
  return (
    <div className="boardContainer">
      <Column title="toDo" posts={posts} />
      <Column title="Doing" />
      <Column title="Done" />
    </div>
  );
};

export default Board;
