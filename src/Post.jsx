import React from "react";

const Post = ({ title, content, key }) => {
  return (
    <div className="Card" draggable id={key}>
      <h3>{title}</h3>
      <p>date here</p>
      <p>{content}</p>
      <button>delete card</button>
    </div>
  );
};

export default Post;
