import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const SelectColumn = ({ id }) => {
  const { posts, setPosts, columns } = useContext(DataContext);

  const handleSelectItem = (e) => {
    const changePostColumn = posts.find((task) => task.id == id);
    changePostColumn.assignedTo = Number(e.target.value);

    const editedPosts = posts.map((task) =>
      task.id === id ? changePostColumn : task
    );

    setPosts(editedPosts);
  };

  return (
    <select onChange={handleSelectItem}>
      <option value={""}>Select a column</option>
      {columns.map((columnName, index) => (
        <option key={`${columnName}${index}`} value={index}>
          {columnName}
        </option>
      ))}
    </select>
  );
};

export default SelectColumn;
