import Header from "./Header";
import "./style/App.css";
import Board from "./Board";
import FullScreenColumn from "./FullScreenColumn";
import CreateTask from "./CreateTask";
import Missing from "./Missing";
import FullScreenPost from "./FullScreenPost";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div className="websiteContainer">
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/column/:ID" element={<FullScreenColumn />} />
          <Route path="/posts/:ID" element={<FullScreenPost />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
