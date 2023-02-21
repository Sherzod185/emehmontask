import React, { useRef, useState } from "react";
import rek from "../style/reklama.jpg";
import rek2 from "../style/wrek8.jpg"
const Reklama = () => {
  const reklam = useRef();
  const [state, setState] = useState(null);

  setInterval(() => {
    const date = new Date().getSeconds();
    if (date % 2 === 0) {
      setState(true);
    } else {
      setState(false);
    }
  }, 1000);
  const close = () => {
    reklam.current.style.display = "none";
  };
  return (
    <div ref={reklam} className="reklama container">
      <img style={{ height: "180px", width: "82%" }} src={state?rek:rek2} alt="reklama" />
      <p onClick={() => close()}>X</p>
    </div>
  );
};

export default Reklama;
