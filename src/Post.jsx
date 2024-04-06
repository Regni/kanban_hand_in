import React, { useContext } from "react";
import DataContext from "./context/DataContext";
import { RiDeleteBin5Line as Bin } from "react-icons/ri";
const Post = ({ title, id, date, handleSelect }) => {
  const { posts, setPosts } = useContext(DataContext);
  //Removes the div and information from the post
  const handleDelete = (id) => {
    const newPostsList = posts.filter((task) => task.id != id);
    setPosts(newPostsList);
  };
  //keeps all the information and rerenders it in new column
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    console.log("draggin!");
  };

  return (
    <div
      className="Card"
      draggable
      id={id}
      onDragStart={(e) => handleDragStart(e, id)}
      onClick={() => handleSelect(id)}
    >
      <h3>{title}</h3>
      <p>{date}</p>

      <Bin
        className="deleteIcon"
        onClick={(e) => {
          //Stops both on clicks being triggered
          e.stopPropagation();
          handleDelete(id);
        }}
      />
    </div>
  );
};

export default Post;
