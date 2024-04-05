import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FullScreenColumn.css";
import Post from "./Post";
import DataContext from "./context/DataContext";
const FullScreenColumn = () => {
  const { posts, columns } = useContext(DataContext);
  const { ID } = useParams();
  const index = columns.indexOf(ID);

  const [selectedPost, setSelectedPost] = useState("");

  const handleClick = (i) => {
    console.log(i);
    const clickedPost = posts.find((post) => post.id === i);
    setSelectedPost(clickedPost);
    console.log(selectedPost);
  };
  const handleClose = () => {
    setSelectedPost("");
  };
  return (
    <div className="fullScreenContainer">
      <div className="fullScreenColumn">
        <h2>{ID}</h2>

        {posts != null
          ? posts.map((test) =>
              test.assignedTo === index ? (
                <Post
                  title={test.title}
                  content={test.content}
                  id={test.id}
                  date={test.date}
                  key={`${test.id}key`}
                  handleSelect={handleClick}
                />
              ) : null
            )
          : null}
      </div>
      {selectedPost ? (
        <div className="fullScreenTask">
          <p>{selectedPost.date}</p>
          <h1>{selectedPost.title}</h1>
          <p className="fullScreenTaskContent">{selectedPost.content}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      ) : null}
      <Link to="/">
        <button className="returnBoardBtn">return to board</button>
      </Link>
    </div>
  );
};

export default FullScreenColumn;
