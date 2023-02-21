import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import drop from "../style/drop.svg";
const Login = ({ handel }) => {
  const dros = useRef();

  useEffect(() => {
    if (localStorage.length && window.location.path === undefined) {
      window.location.replace("./main");
    }
  }, []);
  setInterval(() => {
    const date = new Date().getSeconds();
    if (date % 2 === 0) {
      return (dros.current.style.opacity = "0");
    } else {
      return (dros.current.style.opacity = "1");
    }
  }, 500);
  return (
    <div className="login">
      <div className="container">
        <h1>Welcome </h1>
        <p ref={dros}>
          <img src={drop} alt="drop" />
        </p>
        <Link button onClick={() => handel()}>
          Sign in with Google
        </Link>
      </div>
    </div>
  );
};

export default Login;
// https://files.ati.su/static/header_assets/img/logo.svg
