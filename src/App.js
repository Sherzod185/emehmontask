import React from "react";
import Main from "./components/Main";
import { useEffect, useState } from "react";
import Login from "./components/login";
import { auth, provider } from "./firebase/config";
import { Route, Routes } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

const App = () => {
    const [user, setUser] = useState(null);
    const handel = () => {
      signInWithPopup(auth, provider)?.then((user) => {
        setUser(user.user);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload();
        }
      });
    };
     useEffect(() => {
       JSON.parse(localStorage.getItem("user"));
     }, []);
     const userL = JSON.parse(localStorage?.getItem("user"));
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/main" element={<Main user={userL} />} />
        <Route path="/" element={<Login handel={handel} user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
