import Header from "./Header";
import "./style/App.css";
import Board from "./Board";
import FullScreenColumn from "./FullScreenColumn";
import CreateTask from "./CreateTask";
import Missing from "./Missing";
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
          <Route path="/column/:ID" element={<FullScreenColumn />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
