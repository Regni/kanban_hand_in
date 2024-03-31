import React, { useContext } from "react";
import Column from "./Column";
import DataContext from "./context/DataContext";
const Board = () => {
  const { columns } = useContext(DataContext);

  return (
    <div className="boardContainer">
      {columns.map((columnName, index) => (
        <Column title={columnName} key={index} />
      ))}
    </div>
  );
};

export default Board;
