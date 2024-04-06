import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./FullScreenColumn.css";
import Post from "./Post";
import DataContext from "./context/DataContext";
const FullScreenColumn = () => {
  const { posts, setPosts, columns } = useContext(DataContext);
  const { ID } = useParams();
  const index = columns.indexOf(ID);

  const [selectedPost, setSelectedPost] = useState("");
  //this prevents the post being changed by accident
  const [editText, setEditText] = useState(selectedPost);

  const handleClick = (i) => {
    const clickedPost = posts.find((post) => post.id === i);
    setSelectedPost(clickedPost);
  };
  //changes the editText when a new card is selected
  useEffect(() => {
    setEditText(selectedPost);
  }, [selectedPost]);

  const handleClose = () => {
    setSelectedPost("");
  };

  //when title or conent are editted this will changed the editedTask
  const handleEdit = (e) => {
    const { dataset, innerText } = e.target;
    const { name } = dataset;
    setEditText((p) => ({ ...p, [name]: innerText }));
  };

  //changes the old task to the newEdited one and closes the popup.
  const handleSave = () => {
    const editedPosts = posts.map((task) =>
      task.id === editText.id ? editText : task
    );
    setPosts(editedPosts);
  };

  return (
    <>
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
            <h2
              contentEditable
              onInput={handleEdit}
              suppressContentEditableWarning
              data-name="title"
            >
              {selectedPost.title}
            </h2>
            <p
              className="fullScreenTaskContent"
              suppressContentEditableWarning
              contentEditable
              onInput={handleEdit}
              data-name="content"
            >
              {selectedPost.content}
            </p>
            <button onClick={handleSave}>save changes</button>
            <button onClick={handleClose}>close</button>
          </div>
        ) : null}
      </div>
      <Link to="/">
        <button className="returnBoardBtn">return to board</button>
      </Link>
    </>
  );
};

export default FullScreenColumn;
