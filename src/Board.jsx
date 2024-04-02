import { useContext } from "react";
import Column from "./Column";
import DataContext from "./context/DataContext";
import MainColumn from "./MainColumn";



const Board = () => {
  const { columns } = useContext(DataContext);

  return (
    <div className="boardContainer">
      <MainColumn/>
      {columns.map((columnName, index) => (
        <Column title={columnName} key={`columKey-${columnName.charCodeAt(0)**index}` } index={index}/>
      ))}
    </div>
  );
};

export default Board;
