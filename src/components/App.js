import React, { useState } from "react";
import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Favourites from "./Favourites";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (response) => {
    setUserEmail(response.email);
    setUserName(response.name);
    setUserId(response.id);
  };
  const handleLogout = () => {
    window.FB.logout();
    setUserId("");
  };
  return (
    <div className="App">
      <NavBar
        onLogin={handleLogin}
        userId={userId}
        userName={userName}
        userEmail={userEmail}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/properties" element={<Properties userId={userId} />} />
        <Route
          path="/saved-properties"
          element={<Favourites userId={userId} />}
        />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
