import React, { useContext } from "react";
import DataContext from "./context/DataContext";
const Post = ({ title, content, id, date }) => {
  const { posts, setPosts } = useContext(DataContext);

  const handleDelete = (id) => {
    const newPostsList = posts.filter((task) => task.id != id);
    setPosts(newPostsList);
  };

  return (
    <div className="Card" draggable id={id}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{content}</p>
      <button onClick={() => handleDelete(id)}>delete card</button>
    </div>
  );
};

export default Post;
