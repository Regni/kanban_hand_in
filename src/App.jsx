import Header from "./Header";
import "./App.css";
import Column from "./Column";
import Board from "./Board";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the post content",
      date: new Date(),
    },
  ]);

  const [postCreation, setPostCreation] = useState(false);

  function handleCreatePost(newTitle, newContent) {
    newPost = {
      id: posts.length + 1,
      title: newTitle,
      content: newContent,
      date: new Date(),
    };
  }

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Board posts={posts} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
