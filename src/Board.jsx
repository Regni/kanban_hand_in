import { useContext, useState } from "react";
import Column from "./Column";
import DataContext from "./context/DataContext";
import TaskPopup from "./TaskPopup";

const Board = () => {
  const { columns, posts } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  //handles which div is selected for the popup
  const handleSelect = (taskId) => {
    const newSeletectTask = posts.find((post) => post.id === taskId);
    setSelectedTask(newSeletectTask);
    setIsOpen(true);
  };

  return (
    <div className="boardContainer">
      {columns.map((columnName, index) => (
        <Column
          title={columnName}
          key={`columKey-${columnName.charCodeAt(0) ** index}`}
          index={index}
          handleSelect={handleSelect}
        />
      ))}

      {isOpen ? <TaskPopup task={selectedTask} setIsOpen={setIsOpen} /> : null}
    </div>
  );
};

export default Board;
