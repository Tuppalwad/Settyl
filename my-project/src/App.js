import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Input from "./Input";
import UserInfo from "./UserInfo";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Input></Input>} />
          <Route path="/detail" element={<UserInfo></UserInfo>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
