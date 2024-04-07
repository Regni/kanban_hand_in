import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import { RiDeleteBin5Line as Bin } from "react-icons/ri";
import { BsArrowsFullscreen as Fullscreen } from "react-icons/bs";

const Post = ({ title, id, date, handleSelect }) => {
  const { handleDelete } = useContext(DataContext);
  //finds dragging object and stores info while moving
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
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
      <div className="iconContainer">
        <Link to={`/posts/${id}`}>
          <Fullscreen className="fullScreenIcon" />
        </Link>
        <Bin
          className="deleteIcon"
          onClick={(e) => {
            //Stops both on clicks being triggered
            e.stopPropagation();
            handleDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default Post;
