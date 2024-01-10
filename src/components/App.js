import React, { useState } from "react";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const [userId, setUserId] = useState("");
  const handleLogin = (response) => {
    setUserId(response.id);
  };
  const handleLogout = () => {
    window.FB.logout();
    setUserId("");
  };
  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
      <Routes>
        <Route path="/properties" element={<Properties />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
