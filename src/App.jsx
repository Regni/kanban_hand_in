import Header from "./Header";
import "./App.css";
import Board from "./Board";
import CreateTask from "./CreateTask";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
function App() {
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
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/create" element={<CreateTask />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
