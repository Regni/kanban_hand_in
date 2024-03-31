import React from "react";

const Post = ({ title, content, id, date }) => {
  return (
    <div className="Card" draggable id={id}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{content}</p>
      <button>delete card</button>
    </div>
  );
};

export default Post;
